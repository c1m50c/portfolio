var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let l,i;function c(t,n){return l||(l=document.createElement("a")),l.href=n,t===l.href}function a(t,n,e,s){if(t){const o=u(t,n,e,s);return t[0](o)}}function u(t,n,e,s){return t[1]&&s?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](s(n))):e.ctx}function g(t,n,e,s){if(t[2]&&s){const o=t[2](s(e));if(void 0===n.dirty)return o;if("object"==typeof o){const t=[],e=Math.max(n.dirty.length,o.length);for(let s=0;s<e;s+=1)t[s]=n.dirty[s]|o[s];return t}return n.dirty|o}return n.dirty}function $(t,n,e,s,o,r){if(o){const l=u(n,e,s,r);t.p(l,o)}}function f(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function m(t,n){t.appendChild(n)}function p(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function h(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function v(t){return document.createElement(t)}function k(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function b(){return w(" ")}function L(t,n,e,s){return t.addEventListener(n,e,s),()=>t.removeEventListener(n,e,s)}function C(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function j(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function x(t,n,e,s){t.style.setProperty(n,e,s?"important":"")}function y(t){i=t}function M(){if(!i)throw new Error("Function called outside component initialization");return i}const H=[],V=[],_=[],q=[],Z=Promise.resolve();let z=!1;function B(t){_.push(t)}let E=!1;const S=new Set;function G(){if(!E){E=!0;do{for(let t=0;t<H.length;t+=1){const n=H[t];y(n),T(n.$$)}for(y(null),H.length=0;V.length;)V.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];S.has(n)||(S.add(n),n())}_.length=0}while(H.length);for(;q.length;)q.pop()();z=!1,E=!1,S.clear()}}function T(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(B)}}const P=new Set;let R;function A(){R={r:0,c:[],p:R}}function I(){R.r||s(R.c),R=R.p}function O(t,n){t&&t.i&&(P.delete(t),t.i(n))}function D(t,n,e,s){if(t&&t.o){if(P.has(t))return;P.add(t),R.c.push((()=>{P.delete(t),s&&(e&&t.d(1),s())})),t.o(n)}}function N(t,n){const e=n.token={};function s(t,s,o,r){if(n.token!==e)return;n.resolved=r;let l=n.ctx;void 0!==o&&(l=l.slice(),l[o]=r);const i=t&&(n.current=t)(l);let c=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==s&&t&&(A(),D(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),I())})):n.block.d(1),i.c(),O(i,1),i.m(n.mount(),n.anchor),c=!0),n.block=i,n.blocks&&(n.blocks[s]=i),c&&G()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const e=M();if(t.then((t=>{y(e),s(n.then,1,n.value,t),y(null)}),(t=>{if(y(e),s(n.catch,2,n.error,t),y(null),!n.hasCatch)throw t})),n.current!==n.pending)return s(n.pending,0),!0}else{if(n.current!==n.then)return s(n.then,1,n.value,t),!0;n.resolved=t}var o}function W(t){t&&t.c()}function F(t,e,r,l){const{fragment:i,on_mount:c,on_destroy:a,after_update:u}=t.$$;i&&i.m(e,r),l||B((()=>{const e=c.map(n).filter(o);a?a.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(B)}function J(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function K(t,n){-1===t.$$.dirty[0]&&(H.push(t),z||(z=!0,Z.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Q(n,o,r,l,c,a,u,g=[-1]){const $=i;y(n);const f=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map($?$.$$.context:o.context||[]),callbacks:e(),dirty:g,skip_bound:!1,root:o.target||$.$$.root};u&&u(f.root);let m=!1;if(f.ctx=r?r(n,o.props||{},((t,e,...s)=>{const o=s.length?s[0]:e;return f.ctx&&c(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),m&&K(n,t)),e})):[],f.update(),m=!0,s(f.before_update),f.fragment=!!l&&l(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(d)}else f.fragment&&f.fragment.c();o.intro&&O(n.$$.fragment),F(n,o.target,o.anchor,o.customElement),G()}y($)}class U{$destroy(){J(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function X(n){let e;return{c(){e=v("div"),e.innerHTML='<nav class="navigation-bar svelte-1qfn9lh"><a class="navbar-link svelte-1qfn9lh" href="#">Welcome</a> \n        <a class="navbar-link svelte-1qfn9lh" href="#skills">Skills</a> \n        <a class="navbar-link svelte-1qfn9lh" href="#projects">Projects</a> \n        <a class="navbar-link svelte-1qfn9lh" href="#contact">Contact</a></nav>',C(e,"class","navigation-bar-container svelte-1qfn9lh")},m(t,n){p(t,e,n)},p:t,i:t,o:t,d(t){t&&d(e)}}}class Y extends U{constructor(t){super(),Q(this,t,null,X,r,{})}}function tt(n){let e;return{c(){e=v("div"),e.innerHTML='<svg width="328" height="368" viewBox="0 0 328 368" xmlns="http://www.w3.org/2000/svg" id="logo" class="svelte-p75hal"><g><path id="logo-path" d="M134.015 82.5174C137.643 121.896 143.026 161.079 148.566 200.225C155.324 245.741 162.326 291.223 169.81 336.626C171.043 343.938 172.35 351.238 173.65 358.539C176.091 372.248 195.478 368.796 193.038 355.087C191.753 347.869 190.46 340.652 189.241 333.423C181.78 288.167 174.801 242.833 168.064 197.465C162.61 158.937 157.331 120.373 153.687 81.6232C153.055 67.7128 133.383 68.607 134.015 82.5174Z" class="svelte-p75hal"></path><path id="logo-path" d="M95.5772 233.886C97.5979 233.631 99.629 233.448 101.639 233.12C120.469 230.047 139.208 225.43 157.254 219.25C167.749 215.656 178.214 211.904 188.348 207.396C199.905 202.256 210.945 196.027 222.244 190.342C233.108 183.274 244.389 176.809 254.836 169.138C273.343 155.548 291.515 139.359 305.406 120.892C315.812 107.059 325.939 89.052 327.276 71.163C327.889 62.9531 325.176 54.8319 324.126 46.6664C319.359 39.4591 316.093 30.9932 309.825 25.0444C293.29 9.35003 270.982 3.12849 248.96 0.917283C220.119 -1.97867 185.507 2.35398 157.62 8.71109C141.491 12.3879 125.898 18.1124 110.037 22.813C74.6917 37.2926 64.1088 40.1281 32.069 58.6398C22.7372 64.0315 14.0258 70.4321 5.00424 76.3283C-6.64025 83.964 4.15833 100.432 15.8028 92.7961C24.2578 87.2322 32.4147 81.1865 41.1677 76.1044C71.7298 58.3597 81.9259 55.5919 115.663 41.6846C130.697 37.1734 145.476 31.7068 160.764 28.151C186.837 22.0869 217.798 18.126 244.805 20.1664C261.986 21.4646 279.966 25.614 293.847 36.5554C298.335 40.0931 301.076 45.4088 304.69 49.8355C305.863 55.3024 308.39 60.6479 308.209 66.2364C307.724 81.2555 299.276 96.2226 290.728 107.763C277.939 125.03 261.234 139.959 244.071 152.648C234.233 159.922 223.603 166.058 213.369 172.763C202.685 178.176 192.25 184.111 181.317 189.001C171.653 193.325 161.67 196.922 151.66 200.369C133.138 206.747 113.922 211.398 94.5422 214.22C80.6367 214.952 81.6717 234.618 95.5772 233.886V233.886Z" class="svelte-p75hal"></path></g></svg> \n    <div id="h2-container" class="svelte-p75hal"><h2 id="hey" class="svelte-p75hal">Hey, I&#39;m Pere</h2> \n        <p id="hook" class="svelte-p75hal">I do software development</p></div>',C(e,"class","info-container svelte-p75hal"),C(e,"id","welcome")},m(t,n){p(t,e,n)},p:t,i:t,o:t,d(t){t&&d(e)}}}class nt extends U{constructor(t){super(),Q(this,t,null,tt,r,{})}}function et(t){let n,e,s;return{c(){n=k("svg"),e=k("path"),C(e,"id","W"),C(e,"d","M23.1328 4.10938V4.54297C22.7188 4.54297 22.3828 4.61719 22.125 4.76562C21.8672 4.91406 21.6211 5.19141 21.3867 5.59766C21.2305 5.87109 20.9844 6.52344 20.6484 7.55469L16.2188 20.3633H15.75L12.1289 10.2031L8.53125 20.3633H8.10938L3.38672 7.16797C3.03516 6.18359 2.8125 5.60156 2.71875 5.42188C2.5625 5.125 2.34766 4.90625 2.07422 4.76562C1.80859 4.61719 1.44531 4.54297 0.984375 4.54297V4.10938H6.86719V4.54297H6.58594C6.17188 4.54297 5.85547 4.63672 5.63672 4.82422C5.41797 5.01172 5.30859 5.23828 5.30859 5.50391C5.30859 5.77734 5.48047 6.40625 5.82422 7.39062L8.95312 16.3086L11.5898 8.72656L11.1211 7.39062L10.7461 6.32422C10.582 5.93359 10.3984 5.58984 10.1953 5.29297C10.0938 5.14453 9.96875 5.01953 9.82031 4.91797C9.625 4.77734 9.42969 4.67578 9.23438 4.61328C9.08594 4.56641 8.85156 4.54297 8.53125 4.54297V4.10938H14.7188V4.54297H14.2969C13.8594 4.54297 13.5391 4.63672 13.3359 4.82422C13.1328 5.01172 13.0312 5.26563 13.0312 5.58594C13.0312 5.98438 13.207 6.67969 13.5586 7.67188L16.6055 16.3086L19.6289 7.55469C19.9727 6.58594 20.1445 5.91406 20.1445 5.53906C20.1445 5.35938 20.0859 5.19141 19.9688 5.03516C19.8594 4.87891 19.7188 4.76953 19.5469 4.70703C19.25 4.59766 18.8633 4.54297 18.3867 4.54297V4.10938H23.1328Z"),C(n,"xmlns","http://www.w3.org/2000/svg"),C(n,"viewBox","0 0 24 24"),C(n,"class",s=t[1]+"-logo logo")},m(t,s){p(t,n,s),m(n,e)},p(t,e){2&e&&s!==(s=t[1]+"-logo logo")&&C(n,"class",s)},d(t){t&&d(n)}}}function st(t){let n,e,s;return{c(){n=k("svg"),e=k("path"),C(e,"d","M19.4766 16L18.7676 12.0039H18.4746L17.9941 10.4922H19.4766L20.2617 14.5234H20.3789L20.748 9.78906H22.2363L21.6855 16H19.4766ZM2.31445 16L1.76367 9.78906H3.25195L3.62109 14.5234H3.73828L4.52344 10.4922H6.00586L5.50195 12.0039H5.23242L4.47656 16H2.31445ZM6.02344 16L5.30273 12.0039H5.00977L4.52344 10.4922H6.00586L6.82031 14.5234H6.9375V16H6.02344ZM6.82031 16V14.5234H6.9375L7.83398 10.4922H9.32227L8.71875 12.0039H8.54297L7.69336 16H6.82031ZM9.35742 16L8.61328 12.0039H8.32031L7.83398 10.4922H9.32227L10.1602 14.5234H10.2773V16H9.35742ZM10.1602 16V14.5234H10.2773L11.2559 10.4922H12.7441L12.1406 12.0039H11.9648L11.0801 16H10.1602ZM12.9199 16L12.0352 12.0039H11.7422L11.2559 10.4922H12.7441L13.7227 14.5234H13.8398V16H12.9199ZM13.7227 16V14.5234H13.8398L14.6777 10.4922H16.166L15.5625 12.0039H15.3867L14.6426 16H13.7227ZM16.2598 16L15.457 12.0039H15.1641L14.6777 10.4922H16.166L17.0625 14.5234H17.1797V16H16.2598ZM17.0625 16V14.5234H17.1797L17.9941 10.4922H19.4766L18.873 12.0039H18.6973L17.9766 16H17.0625Z"),C(n,"xmlns","http://www.w3.org/2000/svg"),C(n,"viewBox","0 0 24 24"),C(n,"class",s=t[1]+"-logo logo")},m(t,s){p(t,n,s),m(n,e)},p(t,e){2&e&&s!==(s=t[1]+"-logo logo")&&C(n,"class",s)},d(t){t&&d(n)}}}function ot(t){let n,e,s;return{c(){n=k("svg"),e=k("path"),C(e,"id","Vector"),C(e,"d","M21.0859 11.5244L17.3125 10.1103V5.87207C17.3125 5.28613 16.9492 4.76269 16.3984 4.55566L12.4922 3.09082C12.1758 2.96973 11.8242 2.96973 11.5039 3.09082L7.59766 4.55566C7.04688 4.76269 6.68359 5.28613 6.68359 5.87207V10.1103L2.91016 11.5244C2.36328 11.7314 2 12.2549 2 12.8408V17.1416C2 17.6728 2.30078 18.1611 2.77734 18.3994L6.68359 20.3525C7.07813 20.5518 7.54688 20.5518 7.94141 20.3525L12 18.3213L16.0586 20.3525C16.4531 20.5518 16.9219 20.5518 17.3164 20.3525L21.2227 18.3994C21.6992 18.1611 22 17.6728 22 17.1416V12.8408C22 12.2549 21.6367 11.7314 21.0859 11.5244V11.5244ZM15.9844 10.1416L12.6641 11.3877V8.72363L15.9844 7.27832V10.1416ZM8.01562 5.81738L12 4.32519L15.9844 5.81738V5.84082L12 7.45801L8.01562 5.84082V5.81738ZM11.2969 17.1885L7.97656 18.8486V15.7588L11.2969 14.2432V17.1885ZM11.2969 12.8135L7.3125 14.4307L3.32812 12.8135V12.79L7.3125 11.2978L11.2969 12.79V12.8135ZM20.6719 17.1885L17.3516 18.8486V15.7588L20.6719 14.2432V17.1885ZM20.6719 12.8135L16.6875 14.4307L12.7031 12.8135V12.79L16.6875 11.2978L20.6719 12.79V12.8135Z"),C(n,"xmlns","http://www.w3.org/2000/svg"),C(n,"viewBox","0 0 24 24"),C(n,"class",s=t[1]+"-logo logo")},m(t,s){p(t,n,s),m(n,e)},p(t,e){2&e&&s!==(s=t[1]+"-logo logo")&&C(n,"class",s)},d(t){t&&d(n)}}}function rt(t){let n,e,s,o;return{c(){n=k("svg"),e=k("path"),s=k("path"),C(e,"d","M10 7L14.5 5L19.25 7L24 9V15V21L19.5 23L14.5 25L10 23L5 20.5V15L10 13V10.5V7Z"),C(s,"d","M10 7L14.5 5L19.25 7M10 7L14.5 9M10 7V10.5M14.5 9L10 10.5M14.5 9L19 11M14.5 9L19.25 7M10 10.5L14.5 12.5M10 10.5V13M10 17L14.5 19M10 17V23M10 17L5 15M10 17V13M14.5 19V12.5M14.5 19L19.25 17M14.5 19V25M14.5 12.5L19 11M24 9V15M24 9L19.25 7M24 9L19.25 10.9M24 15V21L19.5 23M24 15L19.5 16.8947M19 11L19.25 10.9M19.25 10.9V17M19.25 17L19.5 16.8947M19.5 23V16.8947M19.5 23L14.5 25M14.5 25L10 23M10 23L5 20.5V15M5 15L10 13"),C(s,"stroke","black"),C(s,"stroke-width","0.25"),C(s,"stroke-linejoin","round"),C(n,"xmlns","http://www.w3.org/2000/svg"),C(n,"viewBox","0 0 30 30"),C(n,"class",o=t[1]+"-logo logo")},m(t,o){p(t,n,o),m(n,e),m(n,s)},p(t,e){2&e&&o!==(o=t[1]+"-logo logo")&&C(n,"class",o)},d(t){t&&d(n)}}}function lt(t){let n,e,s;return{c(){n=k("svg"),e=k("path"),C(e,"d","M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"),C(n,"xmlns","http://www.w3.org/2000/svg"),C(n,"viewBox","0 0 30 30"),C(n,"class",s=t[1]+"-logo logo")},m(t,s){p(t,n,s),m(n,e)},p(t,e){2&e&&s!==(s=t[1]+"-logo logo")&&C(n,"class",s)},d(t){t&&d(n)}}}function it(t){let n,e,s;return{c(){n=k("svg"),e=k("path"),C(e,"d","M11.9985 2.25C10.6688 2.25 4.1514 5.98793 3.49365 7.12793C2.83515 8.26868 2.83515 15.7373 3.49365 16.8735C4.1544 18.0128 10.6718 21.75 11.9985 21.75C13.3215 21.75 19.8389 18.015 20.5019 16.8765C21.1672 15.735 21.1672 8.26054 20.5019 7.12354V7.12207C19.8337 5.98432 13.317 2.25 11.9985 2.25ZM11.9971 3.75879C13.2698 4.02354 18.3133 6.91257 19.1968 7.88232C19.6018 9.11307 19.601 14.8832 19.1968 16.1162C18.3193 17.0845 13.2713 19.9772 11.9971 20.2412C10.7236 19.9787 5.67929 17.0874 4.80029 16.1177C4.39904 14.8817 4.39904 9.11682 4.80029 7.88232C5.67704 6.91257 10.7228 4.02129 11.9971 3.75879ZM9.74999 6.75L8.24999 8.25H8.99999V15.75H10.5V12.75H13.5V15.75H12.75L14.25 17.25L15.75 15.75H15V9H13.5V11.25H10.5V8.25H11.25L9.74999 6.75Z"),C(n,"xmlns","http://www.w3.org/2000/svg"),C(n,"viewBox","0 0 24 24"),C(n,"class",s=t[1]+"-logo logo")},m(t,s){p(t,n,s),m(n,e)},p(t,e){2&e&&s!==(s=t[1]+"-logo logo")&&C(n,"class",s)},d(t){t&&d(n)}}}function ct(t){let n,e,s;return{c(){n=k("svg"),e=k("path"),C(e,"d","M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"),C(n,"xmlns","http://www.w3.org/2000/svg"),C(n,"viewBox","0 0 24 24"),C(n,"class",s=t[1]+"-logo logo")},m(t,s){p(t,n,s),m(n,e)},p(t,e){2&e&&s!==(s=t[1]+"-logo logo")&&C(n,"class",s)},d(t){t&&d(n)}}}function at(n){let e,s;function o(t,n){return t[1]==ut.Github?ct:t[1]==ut.HackerRank?it:t[1]==ut.LinkedIn?lt:t[1]==ut.CratesIO?rt:t[1]==ut.DocsRS?ot:t[1]==ut.Website?st:t[1]==ut.Wikipedia?et:void 0}let r=o(n),l=r&&r(n);return{c(){e=v("a"),l&&l.c(),C(e,"href",n[0]),C(e,"class",s=n[1]+"-link logo-link")},m(t,n){p(t,e,n),l&&l.m(e,null)},p(t,[n]){r===(r=o(t))&&l?l.p(t,n):(l&&l.d(1),l=r&&r(t),l&&(l.c(),l.m(e,null))),1&n&&C(e,"href",t[0]),2&n&&s!==(s=t[1]+"-link logo-link")&&C(e,"class",s)},i:t,o:t,d(t){t&&d(e),l&&l.d()}}}var ut;function gt(t,n,e){let{link:s}=n,{icon:o}=n;return t.$$set=t=>{"link"in t&&e(0,s=t.link),"icon"in t&&e(1,o=t.icon)},[s,o]}!function(t){t.Github="github",t.HackerRank="hacker-rank",t.LinkedIn="linked-in",t.CratesIO="crates-io",t.DocsRS="docs-rs",t.Website="website",t.Wikipedia="wikipedia"}(ut||(ut={}));class $t extends U{constructor(t){super(),Q(this,t,gt,at,r,{link:0,icon:1})}}function ft(t,n,e){const s=t.slice();return s[4]=n[e],s}function mt(t,n,e){const s=t.slice();return s[7]=n[e],s}function pt(t){let n,e,s,o,r,l=t[0].description+"";return{c(){n=v("div"),e=v("h2"),e.textContent="Description",s=b(),o=v("p"),r=w(l),C(n,"class","details-card description")},m(t,l){p(t,n,l),m(n,e),m(n,s),m(n,o),m(o,r)},p(t,n){1&n&&l!==(l=t[0].description+"")&&j(r,l)},d(t){t&&d(n)}}}function dt(t){let n,e,s,o,r=t[0].tags,l=[];for(let n=0;n<r.length;n+=1)l[n]=ht(mt(t,r,n));return{c(){n=v("div"),e=v("h2"),e.textContent="Tags",s=b(),o=v("div");for(let t=0;t<l.length;t+=1)l[t].c();C(o,"class","list svelte-1qpq76h"),C(n,"class","details-card tags svelte-1qpq76h")},m(t,r){p(t,n,r),m(n,e),m(n,s),m(n,o);for(let t=0;t<l.length;t+=1)l[t].m(o,null)},p(t,n){if(1&n){let e;for(r=t[0].tags,e=0;e<r.length;e+=1){const s=mt(t,r,e);l[e]?l[e].p(s,n):(l[e]=ht(s),l[e].c(),l[e].m(o,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=r.length}},d(t){t&&d(n),h(l,t)}}}function ht(t){let n,e,s=t[7]+"";return{c(){n=v("strong"),e=w(s),C(n,"class","tag svelte-1qpq76h")},m(t,s){p(t,n,s),m(n,e)},p(t,n){1&n&&s!==(s=t[7]+"")&&j(e,s)},d(t){t&&d(n)}}}function vt(t){let n,e,s,o,r,l=t[0].links,i=[];for(let n=0;n<l.length;n+=1)i[n]=kt(ft(t,l,n));const c=t=>D(i[t],1,1,(()=>{i[t]=null}));return{c(){n=v("div"),e=v("h2"),e.textContent="Links",s=b(),o=v("div");for(let t=0;t<i.length;t+=1)i[t].c();C(o,"class","list svelte-1qpq76h"),C(n,"class","details-card links svelte-1qpq76h")},m(t,l){p(t,n,l),m(n,e),m(n,s),m(n,o);for(let t=0;t<i.length;t+=1)i[t].m(o,null);r=!0},p(t,n){if(1&n){let e;for(l=t[0].links,e=0;e<l.length;e+=1){const s=ft(t,l,e);i[e]?(i[e].p(s,n),O(i[e],1)):(i[e]=kt(s),i[e].c(),O(i[e],1),i[e].m(o,null))}for(A(),e=l.length;e<i.length;e+=1)c(e);I()}},i(t){if(!r){for(let t=0;t<l.length;t+=1)O(i[t]);r=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)D(i[t]);r=!1},d(t){t&&d(n),h(i,t)}}}function kt(t){let n,e;return n=new $t({props:{link:t[4].link,icon:t[4].icon}}),{c(){W(n.$$.fragment)},m(t,s){F(n,t,s),e=!0},p(t,e){const s={};1&e&&(s.link=t[4].link),1&e&&(s.icon=t[4].icon),n.$set(s)},i(t){e||(O(n.$$.fragment,t),e=!0)},o(t){D(n.$$.fragment,t),e=!1},d(t){J(n,t)}}}function wt(t){let n,e,s,o,r,l,i,c,a,u,g,$,f,h=t[0].name+"",k="description"in t[0]&&pt(t),x="tags"in t[0]&&dt(t),y="links"in t[0]&&vt(t);return{c(){n=v("div"),e=v("div"),s=v("header"),o=v("h1"),r=w(h),l=b(),i=v("div"),k&&k.c(),c=b(),x&&x.c(),a=b(),y&&y.c(),C(o,"class","name"),C(s,"class","svelte-1qpq76h"),C(i,"class","details svelte-1qpq76h"),C(e,"class",u="info-box "+t[0].background+" svelte-1qpq76h"),C(n,"class","skill-info background svelte-1qpq76h")},m(u,d){var h;p(u,n,d),m(n,e),m(e,s),m(s,o),m(o,r),m(e,l),m(e,i),k&&k.m(i,null),m(i,c),x&&x.m(i,null),m(i,a),y&&y.m(i,null),t[2](n),g=!0,$||(f=L(n,"click",(h=t[3],function(t){t.target===this&&h.call(this,t)})),$=!0)},p(t,[n]){(!g||1&n)&&h!==(h=t[0].name+"")&&j(r,h),"description"in t[0]?k?k.p(t,n):(k=pt(t),k.c(),k.m(i,c)):k&&(k.d(1),k=null),"tags"in t[0]?x?x.p(t,n):(x=dt(t),x.c(),x.m(i,a)):x&&(x.d(1),x=null),"links"in t[0]?y?(y.p(t,n),1&n&&O(y,1)):(y=vt(t),y.c(),O(y,1),y.m(i,null)):y&&(A(),D(y,1,1,(()=>{y=null})),I()),(!g||1&n&&u!==(u="info-box "+t[0].background+" svelte-1qpq76h"))&&C(e,"class",u)},i(t){g||(O(y),g=!0)},o(t){D(y),g=!1},d(e){e&&d(n),k&&k.d(),x&&x.d(),y&&y.d(),t[2](null),$=!1,f()}}}function bt(t,n,e){let s,{obj:o}=n;return t.$$set=t=>{"obj"in t&&e(0,o=t.obj)},[o,s,function(t){V[t?"unshift":"push"]((()=>{s=t,e(1,s)}))},()=>s.parentNode.removeChild(s)]}class Lt extends U{constructor(t){super(),Q(this,t,bt,wt,r,{obj:0})}}function Ct(n){return{c:t,m:t,p:t,d:t}}function jt(t){let n,e,s,o,r,l=t[6].name+"";function i(){return t[3](t[6])}return{c(){n=v("button"),e=v("h3"),s=w(l),C(e,"class","svelte-1szks3r"),C(n,"class","link-button skill-button "+t[6].background+" svelte-1szks3r")},m(t,l){p(t,n,l),m(n,e),m(e,s),o||(r=L(n,"click",i),o=!0)},p(n,e){t=n},d(t){t&&d(n),o=!1,r()}}}function xt(n){return{c:t,m:t,p:t,d:t}}function yt(n){let e,s={ctx:n,current:null,token:null,hasCatch:!1,pending:xt,then:jt,catch:Ct,value:6};return N(n[0],s),{c(){e=w(""),s.block.c()},m(t,n){p(t,e,n),s.block.m(t,s.anchor=n),s.mount=()=>e.parentNode,s.anchor=e},p(t,[e]){!function(t,n,e){const s=n.slice(),{resolved:o}=t;t.current===t.then&&(s[t.value]=o),t.current===t.catch&&(s[t.error]=o),t.block.p(s,e)}(s,n=t,e)},i:t,o:t,d(t){t&&d(e),s.block.d(t),s.token=null,s=null}}}function Mt(t,n,e){var s=this&&this.__awaiter||function(t,n,e,s){return new(e||(e=Promise))((function(o,r){function l(t){try{c(s.next(t))}catch(t){r(t)}}function i(t){try{c(s.throw(t))}catch(t){r(t)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(l,i)}c((s=s.apply(t,n||[])).next())}))};let{json:o}=n,r=function(){return s(this,void 0,void 0,(function*(){console.log(o);const t=yield fetch(o),n=yield t.json();if(t.ok)return n;throw new Error(n)}))}();function l(t){new Lt({target:document.body,props:{obj:t}})}return t.$$set=t=>{"json"in t&&e(2,o=t.json)},[r,l,o,t=>{l(t)}]}class Ht extends U{constructor(t){super(),Q(this,t,Mt,yt,r,{json:2})}}function Vt(n){let e,s,o,r,l,i,c,a,u,g,$,f,h,k,w,L,j,x,y,M,H,V,_,q,Z,z,B,E,S,G,T,P,R,A,I,N,K,Q,U,X,Y,tt,nt,et,st,ot,rt,lt,it,ct,at,ut,gt,$t,ft,mt,pt,dt,ht,vt,kt,wt,bt,Lt,Ct,jt,xt,yt,Mt,Vt,_t,qt,Zt,zt,Bt,Et,St;return a=new Ht({props:{json:"skills/python.json"}}),g=new Ht({props:{json:"skills/rust.json"}}),f=new Ht({props:{json:"skills/go.json"}}),k=new Ht({props:{json:"skills/java_script.json"}}),L=new Ht({props:{json:"skills/type_script.json"}}),x=new Ht({props:{json:"skills/html.json"}}),M=new Ht({props:{json:"skills/css.json"}}),V=new Ht({props:{json:"skills/sql.json"}}),q=new Ht({props:{json:"skills/c.json"}}),z=new Ht({props:{json:"skills/cpp.json"}}),E=new Ht({props:{json:"skills/csharp.json"}}),G=new Ht({props:{json:"skills/lua.json"}}),P=new Ht({props:{json:"skills/gdscript.json"}}),Q=new Ht({props:{json:"skills/matplotlib.json"}}),X=new Ht({props:{json:"skills/pandas.json"}}),tt=new Ht({props:{json:"skills/numpy.json"}}),et=new Ht({props:{json:"skills/pytest.json"}}),ot=new Ht({props:{json:"skills/flask.json"}}),lt=new Ht({props:{json:"skills/mediapipe.json"}}),ct=new Ht({props:{json:"skills/opencv.json"}}),ut=new Ht({props:{json:"skills/rust_cpython.json"}}),$t=new Ht({props:{json:"skills/sqlite.json"}}),mt=new Ht({props:{json:"skills/react.json"}}),dt=new Ht({props:{json:"skills/vue.json"}}),vt=new Ht({props:{json:"skills/svelte.json"}}),wt=new Ht({props:{json:"skills/tailwind.json"}}),Lt=new Ht({props:{json:"skills/godot.json"}}),Vt=new Ht({props:{json:"skills/google.json"}}),qt=new Ht({props:{json:"skills/git.json"}}),zt=new Ht({props:{json:"skills/npm.json"}}),Et=new Ht({props:{json:"skills/web_assembly.json"}}),{c(){e=v("div"),s=v("h1"),s.textContent="Skills",o=b(),r=v("div"),l=v("h2"),l.textContent="Languages 💬",i=b(),c=v("div"),W(a.$$.fragment),u=b(),W(g.$$.fragment),$=b(),W(f.$$.fragment),h=b(),W(k.$$.fragment),w=b(),W(L.$$.fragment),j=b(),W(x.$$.fragment),y=b(),W(M.$$.fragment),H=b(),W(V.$$.fragment),_=b(),W(q.$$.fragment),Z=b(),W(z.$$.fragment),B=b(),W(E.$$.fragment),S=b(),W(G.$$.fragment),T=b(),W(P.$$.fragment),R=b(),A=v("div"),I=v("h2"),I.textContent="Libraries, Engines & Frameworks 📚",N=b(),K=v("div"),W(Q.$$.fragment),U=b(),W(X.$$.fragment),Y=b(),W(tt.$$.fragment),nt=b(),W(et.$$.fragment),st=b(),W(ot.$$.fragment),rt=b(),W(lt.$$.fragment),it=b(),W(ct.$$.fragment),at=b(),W(ut.$$.fragment),gt=b(),W($t.$$.fragment),ft=b(),W(mt.$$.fragment),pt=b(),W(dt.$$.fragment),ht=b(),W(vt.$$.fragment),kt=b(),W(wt.$$.fragment),bt=b(),W(Lt.$$.fragment),Ct=b(),jt=v("div"),xt=v("h2"),xt.textContent="Miscellaneous Technologies ❓",yt=b(),Mt=v("div"),W(Vt.$$.fragment),_t=b(),W(qt.$$.fragment),Zt=b(),W(zt.$$.fragment),Bt=b(),W(Et.$$.fragment),C(s,"class","section-title svelte-8j7hs"),C(l,"class","section-title svelte-8j7hs"),C(c,"class","info-card-container svelte-8j7hs"),C(r,"class","languages-container"),C(I,"class","section-title svelte-8j7hs"),C(K,"class","info-card-container svelte-8j7hs"),C(A,"class","libraies-engines-and-frameworks-container"),C(xt,"class","section-title svelte-8j7hs"),C(Mt,"class","info-card-container svelte-8j7hs"),C(jt,"class","misc-tech-container"),C(e,"class","info-container svelte-8j7hs"),C(e,"id","skills")},m(t,n){p(t,e,n),m(e,s),m(e,o),m(e,r),m(r,l),m(r,i),m(r,c),F(a,c,null),m(c,u),F(g,c,null),m(c,$),F(f,c,null),m(c,h),F(k,c,null),m(c,w),F(L,c,null),m(c,j),F(x,c,null),m(c,y),F(M,c,null),m(c,H),F(V,c,null),m(c,_),F(q,c,null),m(c,Z),F(z,c,null),m(c,B),F(E,c,null),m(c,S),F(G,c,null),m(c,T),F(P,c,null),m(e,R),m(e,A),m(A,I),m(A,N),m(A,K),F(Q,K,null),m(K,U),F(X,K,null),m(K,Y),F(tt,K,null),m(K,nt),F(et,K,null),m(K,st),F(ot,K,null),m(K,rt),F(lt,K,null),m(K,it),F(ct,K,null),m(K,at),F(ut,K,null),m(K,gt),F($t,K,null),m(K,ft),F(mt,K,null),m(K,pt),F(dt,K,null),m(K,ht),F(vt,K,null),m(K,kt),F(wt,K,null),m(K,bt),F(Lt,K,null),m(e,Ct),m(e,jt),m(jt,xt),m(jt,yt),m(jt,Mt),F(Vt,Mt,null),m(Mt,_t),F(qt,Mt,null),m(Mt,Zt),F(zt,Mt,null),m(Mt,Bt),F(Et,Mt,null),St=!0},p:t,i(t){St||(O(a.$$.fragment,t),O(g.$$.fragment,t),O(f.$$.fragment,t),O(k.$$.fragment,t),O(L.$$.fragment,t),O(x.$$.fragment,t),O(M.$$.fragment,t),O(V.$$.fragment,t),O(q.$$.fragment,t),O(z.$$.fragment,t),O(E.$$.fragment,t),O(G.$$.fragment,t),O(P.$$.fragment,t),O(Q.$$.fragment,t),O(X.$$.fragment,t),O(tt.$$.fragment,t),O(et.$$.fragment,t),O(ot.$$.fragment,t),O(lt.$$.fragment,t),O(ct.$$.fragment,t),O(ut.$$.fragment,t),O($t.$$.fragment,t),O(mt.$$.fragment,t),O(dt.$$.fragment,t),O(vt.$$.fragment,t),O(wt.$$.fragment,t),O(Lt.$$.fragment,t),O(Vt.$$.fragment,t),O(qt.$$.fragment,t),O(zt.$$.fragment,t),O(Et.$$.fragment,t),St=!0)},o(t){D(a.$$.fragment,t),D(g.$$.fragment,t),D(f.$$.fragment,t),D(k.$$.fragment,t),D(L.$$.fragment,t),D(x.$$.fragment,t),D(M.$$.fragment,t),D(V.$$.fragment,t),D(q.$$.fragment,t),D(z.$$.fragment,t),D(E.$$.fragment,t),D(G.$$.fragment,t),D(P.$$.fragment,t),D(Q.$$.fragment,t),D(X.$$.fragment,t),D(tt.$$.fragment,t),D(et.$$.fragment,t),D(ot.$$.fragment,t),D(lt.$$.fragment,t),D(ct.$$.fragment,t),D(ut.$$.fragment,t),D($t.$$.fragment,t),D(mt.$$.fragment,t),D(dt.$$.fragment,t),D(vt.$$.fragment,t),D(wt.$$.fragment,t),D(Lt.$$.fragment,t),D(Vt.$$.fragment,t),D(qt.$$.fragment,t),D(zt.$$.fragment,t),D(Et.$$.fragment,t),St=!1},d(t){t&&d(e),J(a),J(g),J(f),J(k),J(L),J(x),J(M),J(V),J(q),J(z),J(E),J(G),J(P),J(Q),J(X),J(tt),J(et),J(ot),J(lt),J(ct),J(ut),J($t),J(mt),J(dt),J(vt),J(wt),J(Lt),J(Vt),J(qt),J(zt),J(Et)}}}class _t extends U{constructor(t){super(),Q(this,t,null,Vt,r,{})}}const qt=t=>({}),Zt=t=>({class:"logo-link-container svelte-2oibxt"}),zt=t=>({}),Bt=t=>({});function Et(t){let n,e,s,o,r,l,i,c,u,h,k,L;const y=t[4]["status-badge"],M=a(y,t,t[3],Bt),H=t[4]["logo-link-container"],V=a(H,t,t[3],Zt);return{c(){n=v("div"),e=v("div"),s=b(),o=v("div"),r=v("h1"),l=w(t[0]),i=b(),c=v("p"),u=w(t[1]),h=b(),M&&M.c(),k=b(),V&&V.c(),C(e,"class","bg-image svelte-2oibxt"),x(e,"background-image","url("+t[2]+")"),C(o,"class","project-card-details"),C(n,"class","project-card svelte-2oibxt")},m(t,a){p(t,n,a),m(n,e),m(n,s),m(n,o),m(o,r),m(r,l),m(o,i),m(o,c),m(c,u),m(o,h),M&&M.m(o,null),m(o,k),V&&V.m(o,null),L=!0},p(t,[n]){(!L||4&n)&&x(e,"background-image","url("+t[2]+")"),(!L||1&n)&&j(l,t[0]),(!L||2&n)&&j(u,t[1]),M&&M.p&&(!L||8&n)&&$(M,y,t,t[3],L?g(y,t[3],n,zt):f(t[3]),Bt),V&&V.p&&(!L||8&n)&&$(V,H,t,t[3],L?g(H,t[3],n,qt):f(t[3]),Zt)},i(t){L||(O(M,t),O(V,t),L=!0)},o(t){D(M,t),D(V,t),L=!1},d(t){t&&d(n),M&&M.d(t),V&&V.d(t)}}}function St(t,n,e){let{$$slots:s={},$$scope:o}=n,{title:r}=n,{description:l}=n,{background_url:i}=n;return t.$$set=t=>{"title"in t&&e(0,r=t.title),"description"in t&&e(1,l=t.description),"background_url"in t&&e(2,i=t.background_url),"$$scope"in t&&e(3,o=t.$$scope)},[r,l,i,o,s]}class Gt extends U{constructor(t){super(),Q(this,t,St,Et,r,{title:0,description:1,background_url:2})}}function Tt(t){let n;return{c(){n=v("div"),n.innerHTML='<img src="https://img.shields.io/github/license/c1m50c/portfolio?color=blue&amp;style=for-the-badge" alt="License"/> \n        <img src="https://img.shields.io/tokei/lines/github/c1m50c/portfolio?style=for-the-badge" alt="Lines of Code"/>',C(n,"slot","status-badge")},m(t,e){p(t,n,e)},d(t){t&&d(n)}}}function Pt(n){let e,s,o;return s=new $t({props:{link:"https://github.com/c1m50c/portfolio",icon:ut.Github}}),{c(){e=v("div"),W(s.$$.fragment),C(e,"slot","logo-link-container")},m(t,n){p(t,e,n),F(s,e,null),o=!0},p:t,i(t){o||(O(s.$$.fragment,t),o=!0)},o(t){D(s.$$.fragment,t),o=!1},d(t){t&&d(e),J(s)}}}function Rt(t){let n,e;return n=new Gt({props:{title:"Portfolio",description:"My personal portfolio site, the site you're seeing right now.",background_url:"./projects/portfolio.png",$$slots:{"logo-link-container":[Pt],"status-badge":[Tt]},$$scope:{ctx:t}}}),{c(){W(n.$$.fragment)},m(t,s){F(n,t,s),e=!0},p(t,[e]){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(O(n.$$.fragment,t),e=!0)},o(t){D(n.$$.fragment,t),e=!1},d(t){J(n,t)}}}class At extends U{constructor(t){super(),Q(this,t,null,Rt,r,{})}}function It(n){let e,s,o;return s=new $t({props:{link:"https://github.com/c1m50c/cellular-automata",icon:ut.Github}}),{c(){e=v("div"),W(s.$$.fragment),C(e,"slot","logo-link-container")},m(t,n){p(t,e,n),F(s,e,null),o=!0},p:t,i(t){o||(O(s.$$.fragment,t),o=!0)},o(t){D(s.$$.fragment,t),o=!1},d(t){t&&d(e),J(s)}}}function Ot(t){let n,e;return n=new Gt({props:{title:"Cellular Automata",description:"Python project implementing Conway's Game of Life with PyGame.",background_url:"./projects/cellular-automata.gif",$$slots:{"logo-link-container":[It]},$$scope:{ctx:t}}}),{c(){W(n.$$.fragment)},m(t,s){F(n,t,s),e=!0},p(t,[e]){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(O(n.$$.fragment,t),e=!0)},o(t){D(n.$$.fragment,t),e=!1},d(t){J(n,t)}}}class Dt extends U{constructor(t){super(),Q(this,t,null,Ot,r,{})}}function Nt(t){let n;return{c(){n=v("div"),n.innerHTML='<img src="https://img.shields.io/github/workflow/status/c1m50c/sorting-algorithm-visualizer/Tests?style=for-the-badge" alt="Tests"/> \n        <img src="https://img.shields.io/github/license/c1m50c/sorting-algorithm-visualizer?color=blue&amp;style=for-the-badge" alt="License"/> \n        <img src="https://img.shields.io/tokei/lines/github/c1m50c/sorting-algorithm-visualizer?style=for-the-badge" alt="Lines of Code"/>',C(n,"slot","status-badge")},m(t,e){p(t,n,e)},d(t){t&&d(n)}}}function Wt(n){let e,s,o;return s=new $t({props:{link:"https://github.com/c1m50c/sorting-algorithm-visualizer",icon:ut.Github}}),{c(){e=v("div"),W(s.$$.fragment),C(e,"slot","logo-link-container")},m(t,n){p(t,e,n),F(s,e,null),o=!0},p:t,i(t){o||(O(s.$$.fragment,t),o=!0)},o(t){D(s.$$.fragment,t),o=!1},d(t){t&&d(e),J(s)}}}function Ft(t){let n,e;return n=new Gt({props:{title:"Sorting Algorithm Visualizer",description:"Visualizes various sorting algorithms using Matplotlib and Python.",background_url:"./projects/sorting-algorithm-visualizer.gif",$$slots:{"logo-link-container":[Wt],"status-badge":[Nt]},$$scope:{ctx:t}}}),{c(){W(n.$$.fragment)},m(t,s){F(n,t,s),e=!0},p(t,[e]){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(O(n.$$.fragment,t),e=!0)},o(t){D(n.$$.fragment,t),e=!1},d(t){J(n,t)}}}class Jt extends U{constructor(t){super(),Q(this,t,null,Ft,r,{})}}function Kt(t){let n,e;return{c(){n=v("img"),C(n,"slot","status-badge"),c(n.src,e="https://github.com/c1m50c/rust-algorithms/actions/workflows/build.yml/badge.svg?branch=main")||C(n,"src","https://github.com/c1m50c/rust-algorithms/actions/workflows/build.yml/badge.svg?branch=main"),C(n,"alt","Build Status")},m(t,e){p(t,n,e)},d(t){t&&d(n)}}}function Qt(n){let e,s,o;return s=new $t({props:{link:"https://github.com/c1m50c/rust-algorithms",icon:ut.Github}}),{c(){e=v("div"),W(s.$$.fragment),C(e,"slot","logo-link-container")},m(t,n){p(t,e,n),F(s,e,null),o=!0},p:t,i(t){o||(O(s.$$.fragment,t),o=!0)},o(t){D(s.$$.fragment,t),o=!1},d(t){t&&d(e),J(s)}}}function Ut(t){let n,e;return n=new Gt({props:{title:"Rust Algorithms",description:"A Rust library implementing various algorithms.",background_url:"./projects/rust-algorithms.png",$$slots:{"logo-link-container":[Qt],"status-badge":[Kt]},$$scope:{ctx:t}}}),{c(){W(n.$$.fragment)},m(t,s){F(n,t,s),e=!0},p(t,[e]){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(O(n.$$.fragment,t),e=!0)},o(t){D(n.$$.fragment,t),e=!1},d(t){J(n,t)}}}class Xt extends U{constructor(t){super(),Q(this,t,null,Ut,r,{})}}function Yt(t){let n,e;return{c(){n=v("img"),C(n,"slot","status-badge"),c(n.src,e="https://github.com/c1m50c/rust-data-structures/actions/workflows/build.yml/badge.svg?branch=main")||C(n,"src","https://github.com/c1m50c/rust-data-structures/actions/workflows/build.yml/badge.svg?branch=main"),C(n,"alt","Build Status")},m(t,e){p(t,n,e)},d(t){t&&d(n)}}}function tn(n){let e,s,o;return s=new $t({props:{link:"https://github.com/c1m50c/rust-data-structures",icon:ut.Github}}),{c(){e=v("div"),W(s.$$.fragment),C(e,"slot","logo-link-container")},m(t,n){p(t,e,n),F(s,e,null),o=!0},p:t,i(t){o||(O(s.$$.fragment,t),o=!0)},o(t){D(s.$$.fragment,t),o=!1},d(t){t&&d(e),J(s)}}}function nn(t){let n,e;return n=new Gt({props:{title:"Rust Data Structures",description:"A library implementing various Data Structures in Rust, made strictly for learning purposes.",background_url:"./projects/rust-data-structures.png",$$slots:{"logo-link-container":[tn],"status-badge":[Yt]},$$scope:{ctx:t}}}),{c(){W(n.$$.fragment)},m(t,s){F(n,t,s),e=!0},p(t,[e]){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(O(n.$$.fragment,t),e=!0)},o(t){D(n.$$.fragment,t),e=!1},d(t){J(n,t)}}}class en extends U{constructor(t){super(),Q(this,t,null,nn,r,{})}}function sn(t){let n;return{c(){n=v("div"),n.innerHTML='<img src="https://img.shields.io/github/workflow/status/c1m50c/fixed-vectors/Build?style=for-the-badge" alt="Build"/> \n        <img src="https://img.shields.io/crates/v/fixed-vectors?color=orange&amp;style=for-the-badge" alt="CratesIO"/> \n        <img src="https://img.shields.io/crates/l/fixed-vectors?style=for-the-badge" alt="License"/> \n        <img src="https://img.shields.io/tokei/lines/github/c1m50c/fixed-vectors?style=for-the-badge" alt="Lines of Code"/> \n        <img src="https://img.shields.io/github/stars/c1m50c/fixed-vectors?style=for-the-badge" alt="Github Stars"/>',C(n,"slot","status-badge")},m(t,e){p(t,n,e)},d(t){t&&d(n)}}}function on(n){let e,s,o,r,l,i,c;return s=new $t({props:{link:"https://github.com/c1m50c/fixed-vectors",icon:ut.Github}}),r=new $t({props:{link:"https://crates.io/crates/fixed-vectors/",icon:ut.CratesIO}}),i=new $t({props:{link:"https://docs.rs/crate/fixed-vectors/latest",icon:ut.DocsRS}}),{c(){e=v("div"),W(s.$$.fragment),o=b(),W(r.$$.fragment),l=b(),W(i.$$.fragment),C(e,"slot","logo-link-container")},m(t,n){p(t,e,n),F(s,e,null),m(e,o),F(r,e,null),m(e,l),F(i,e,null),c=!0},p:t,i(t){c||(O(s.$$.fragment,t),O(r.$$.fragment,t),O(i.$$.fragment,t),c=!0)},o(t){D(s.$$.fragment,t),D(r.$$.fragment,t),D(i.$$.fragment,t),c=!1},d(t){t&&d(e),J(s),J(r),J(i)}}}function rn(t){let n,e;return n=new Gt({props:{title:"Fixed Vectors",description:"Library implementing fixed-length Vectors meant for representing dimensional values. ",background_url:"./projects/fixed-vectors.png",$$slots:{"logo-link-container":[on],"status-badge":[sn]},$$scope:{ctx:t}}}),{c(){W(n.$$.fragment)},m(t,s){F(n,t,s),e=!0},p(t,[e]){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(O(n.$$.fragment,t),e=!0)},o(t){D(n.$$.fragment,t),e=!1},d(t){J(n,t)}}}class ln extends U{constructor(t){super(),Q(this,t,null,rn,r,{})}}function cn(n){let e,s,o,r,l,i,c,a,u,g,$,f,h,k,w,L;return l=new At({}),c=new ln({}),u=new Jt({}),$=new Dt({}),h=new Xt({}),w=new en({}),{c(){e=v("div"),s=v("h1"),s.textContent="Projects",o=b(),r=v("div"),W(l.$$.fragment),i=b(),W(c.$$.fragment),a=b(),W(u.$$.fragment),g=b(),W($.$$.fragment),f=b(),W(h.$$.fragment),k=b(),W(w.$$.fragment),C(s,"class","section-title"),C(r,"class","project-card-container svelte-alykgw"),C(e,"class","info-container"),C(e,"id","projects")},m(t,n){p(t,e,n),m(e,s),m(e,o),m(e,r),F(l,r,null),m(r,i),F(c,r,null),m(r,a),F(u,r,null),m(r,g),F($,r,null),m(r,f),F(h,r,null),m(r,k),F(w,r,null),L=!0},p:t,i(t){L||(O(l.$$.fragment,t),O(c.$$.fragment,t),O(u.$$.fragment,t),O($.$$.fragment,t),O(h.$$.fragment,t),O(w.$$.fragment,t),L=!0)},o(t){D(l.$$.fragment,t),D(c.$$.fragment,t),D(u.$$.fragment,t),D($.$$.fragment,t),D(h.$$.fragment,t),D(w.$$.fragment,t),L=!1},d(t){t&&d(e),J(l),J(c),J(u),J($),J(h),J(w)}}}class an extends U{constructor(t){super(),Q(this,t,null,cn,r,{})}}function un(n){let e,s,o,r,l,i,c,a,u,g,$,f;return o=new $t({props:{link:$n,icon:ut.Github}}),l=new $t({props:{link:fn,icon:ut.HackerRank}}),c=new $t({props:{link:mn,icon:ut.LinkedIn}}),{c(){e=v("div"),s=v("div"),W(o.$$.fragment),r=b(),W(l.$$.fragment),i=b(),W(c.$$.fragment),a=b(),u=v("button"),u.textContent=`${gn}`,C(s,"class","logo-link-container svelte-12j0kmi"),C(u,"id","email"),C(u,"class","svelte-12j0kmi"),C(e,"class","info-container svelte-12j0kmi"),C(e,"id","contact")},m(t,d){p(t,e,d),m(e,s),F(o,s,null),m(s,r),F(l,s,null),m(s,i),F(c,s,null),m(e,a),m(e,u),g=!0,$||(f=L(u,"click",n[0]),$=!0)},p:t,i(t){g||(O(o.$$.fragment,t),O(l.$$.fragment,t),O(c.$$.fragment,t),g=!0)},o(t){D(o.$$.fragment,t),D(l.$$.fragment,t),D(c.$$.fragment,t),g=!1},d(t){t&&d(e),J(o),J(l),J(c),$=!1,f()}}}const gn="pereiswell@gmail.com",$n="https://github.com/c1m50c",fn="https://www.hackerrank.com/c1m50c",mn="https://www.linkedin.com/in/pere-wells";function pn(t){return[()=>{var t;t=gn,navigator.clipboard.writeText(t)}]}class dn extends U{constructor(t){super(),Q(this,t,pn,un,r,{})}}function hn(n){let e,s,o,r,l,i,c,a,u,g,$;return e=new Y({}),r=new nt({}),i=new _t({}),a=new an({}),g=new dn({}),{c(){W(e.$$.fragment),s=b(),o=v("main"),W(r.$$.fragment),l=b(),W(i.$$.fragment),c=b(),W(a.$$.fragment),u=b(),W(g.$$.fragment),C(o,"class","svelte-1qb2ykx")},m(t,n){F(e,t,n),p(t,s,n),p(t,o,n),F(r,o,null),m(o,l),F(i,o,null),m(o,c),F(a,o,null),m(o,u),F(g,o,null),$=!0},p:t,i(t){$||(O(e.$$.fragment,t),O(r.$$.fragment,t),O(i.$$.fragment,t),O(a.$$.fragment,t),O(g.$$.fragment,t),$=!0)},o(t){D(e.$$.fragment,t),D(r.$$.fragment,t),D(i.$$.fragment,t),D(a.$$.fragment,t),D(g.$$.fragment,t),$=!1},d(t){J(e,t),t&&d(s),t&&d(o),J(r),J(i),J(a),J(g)}}}return new class extends U{constructor(t){super(),Q(this,t,null,hn,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
