(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5326)}])},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(i){c=!0,o=i}finally{try{l||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,l=(a=n(7294))&&a.__esModule?a:{default:a},c=n(6273),i=n(387),u=n(7190);var s={};function f(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=i.useRouter(),a=l.default.useMemo((function(){var t=o(c.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?c.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),d=a.href,p=a.as,h=e.children,m=e.replace,v=e.shallow,y=e.scroll,g=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var b=(t=l.default.Children.only(h))&&"object"===typeof t&&t.ref,w=o(u.useIntersection({rootMargin:"200px"}),2),j=w[0],k=w[1],x=l.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);l.default.useEffect((function(){var e=k&&n&&c.isLocalURL(d),t="undefined"!==typeof g?g:r&&r.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(r,d,p,{locale:t})}),[p,d,k,g,n,r]);var E={ref:x,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:l}))}(e,r,d,p,m,v,y,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof g?g:r&&r.locale,A=r&&r.isLocaleDomain&&c.getDomainLocale(p,S,r&&r.locales,r&&r.domainLocales);E.href=A||c.addBasePath(c.addLocale(p,S,r&&r.defaultLocale))}return l.default.cloneElement(t,E)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(i){c=!0,o=i}finally{try{l||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,r=a.useRef(),u=o(a.useState(!1),2),s=u[0],f=u[1],d=a.useCallback((function(e){r.current&&(r.current(),r.current=void 0),n||s||e&&e.tagName&&(r.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,l=r.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return a.useEffect((function(){if(!c&&!s){var e=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[s]),[d,s]};var a=n(7294),l=n(9311),c="undefined"!==typeof IntersectionObserver;var i=new Map},5326:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),o=n(7294),a=n(1163),l=n(619),c=n(1664),i=n(6779),u=n(5574),s=n(4481);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(i){c=!0,o=i}finally{try{l||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(){var e,t=d((0,l.Z)("/sounds/switch-on.mp3"),1)[0],n=d((0,l.Z)("/sounds/switch-off.mp3"),1)[0],a=function(){return e&&(0,s._0)(e.value)};return(0,o.useEffect)((function(){(e=(0,s.dd)()).addEventListener("search",a)})),(0,r.jsx)("header",{className:"app-header",children:(0,r.jsx)("div",{className:"app-container",children:(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)(c.default,{href:"/",passHref:!0,children:(0,r.jsx)("h2",{className:"logo",children:"Dev blog"})}),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsxs)("div",{className:"search",children:[(0,r.jsx)("input",{type:"search",placeholder:"Search..."}),(0,r.jsx)("button",{onClick:a,children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]}),(0,r.jsx)("div",{className:"darkMode",onClick:function(){return function(){var e=(0,u.Y)();localStorage.theme=e?"light":"dark",document.documentElement.classList=localStorage.theme,(0,i.H6)(!e),e?t():n()}()},children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})})})]})]})})})}function h(){var e=(new Date).getFullYear();return(0,r.jsx)("footer",{className:"app-footer",children:(0,r.jsx)("div",{className:"app-container",children:(0,r.jsxs)("div",{className:"content",children:[(0,r.jsxs)("div",{className:"block mt-6 links",children:[(0,r.jsx)(c.default,{href:"/",passHref:!0,children:(0,r.jsx)("h2",{children:"\ud83c\udfe0 Home"})}),(0,r.jsx)(c.default,{href:"/miscellaneous/newsletter",passHref:!0,children:(0,r.jsx)("h2",{children:"\ud83d\udcf0 Newsletter"})}),(0,r.jsx)(c.default,{href:"/miscellaneous/privacy-policy",passHref:!0,children:(0,r.jsx)("h2",{children:"\ud83d\udd0f Privacy"})}),(0,r.jsx)(c.default,{href:"/miscellaneous/contact",passHref:!0,children:(0,r.jsx)("h2",{children:"\ud83d\udcec Contact"})})]}),(0,r.jsxs)("p",{className:"copyrights",children:["\xa9 ",e," Dan Fleser. All Rights Reserved."]})]})})})}n(7727);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){m(e,t,n[t])}))}return e}function y(e){var t=e.Component,n=e.pageProps,l=(0,a.useRouter)();return(0,o.useEffect)((function(){var e=(0,u.Y)();e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),(0,i.H6)(e);var t=function(e){!function(e){window.gtag("config","G-XPYPLLS6K9",{page_path:e})}(e)};return l.events.on("routeChangeComplete",t),function(){l.events.off("routeChangeComplete",t)}}),[l.events]),(0,r.jsxs)("div",{className:"app",children:[(0,r.jsx)(p,{}),(0,r.jsx)("main",{children:(0,r.jsx)("div",{className:"app-container",children:(0,r.jsx)(t,v({},n))})}),(0,r.jsx)(h,{})]})}},6779:function(e,t,n){"use strict";n.d(t,{yS:function(){return r},rv:function(){return o},H6:function(){return a}});var r="post-comments";function o(e,t){var n=document.createElement("script");n.setAttribute("src","https://utteranc.es/client.js"),n.setAttribute("crossorigin","anonymous"),n.setAttribute("async",!0),n.setAttribute("repo","danfleser/blog"),n.setAttribute("issue-term","title"),n.setAttribute("theme",t?"github-dark":"github-light"),e.appendChild(n)}function a(e){var t=document.getElementById(r);null!==t&&(t.innerHTML="",o(t,e))}},4481:function(e,t,n){"use strict";n.d(t,{_0:function(){return c},N8:function(){return i},dd:function(){return u}});var r=n(225),o=[];function a(){o=[],document.querySelectorAll("[data-tag]").forEach((function(e){e.classList.remove("selected-tag")})),document.querySelectorAll("[data-tags]").forEach((function(e){e.style.display="block"}))}function l(){document.querySelectorAll("[data-name]").forEach((function(e){e.style.display="block"})),document.getElementById(r.Np).style.display="none"}function c(e){if(a(),l(),e){var t=document.querySelectorAll("[data-name]"),n=t.length;t.forEach((function(t){t.dataset.name.toLowerCase().includes(e)||(t.style.display="none",n--)})),n||(document.getElementById(r.Np).style.display="block")}}function i(e,t){u().value="",l(),t(),o.find((function(t){return t===e}))?(o=o.filter((function(t){return t!==e})),document.querySelectorAll("[data-tag]").forEach((function(t){t.dataset.tag.includes(e)&&t.classList.remove("selected-tag")}))):(o.push(e),document.querySelectorAll("[data-tag]").forEach((function(t){t.dataset.tag.includes(e)&&t.classList.add("selected-tag")}))),o.length?document.querySelectorAll("[data-tags]").forEach((function(e){o.find((function(t){return e.dataset.tags.includes(t)}))?e.style.display="block":e.style.display="none"})):a()}function u(){return document.querySelector('input[type="search"]')}},225:function(e,t,n){"use strict";n.d(t,{Np:function(){return l},L0:function(){return a},tC:function(){return o}});var r=JSON.parse('{"F":{"title":"Development blog","author":{"name":"Dan Fleser","email":"danfleser.dev@gmail.com","summary":"I am a web developer with 8+ years of experience focused on working with the latest technologies, recently switched from 8-5 job to freelancing. Helping companies around the world design and implement top-of-the-line scalable enterprise solutions. Follow me in my journey.","facebookPageId":"fleser.dan","twitterId":"@danfleser"},"description":"Dan Fleser development blog","keywords":"webdevelopment, webdesign, webdeveloper, html, website, css, digitalmarketing, coding, programming, javascript, seo, websitedesign, webdesigner, developer, programmer, web, marketing, wordpress, python, design, coder, ecommerce, code, software, php, java, business, softwaredeveloper, graphicdesign, react, angular, linkedin","url":"https://danfleser.com/","language":"en-US"}}');function o(){return r.F}function a(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}var l="no-results"},5574:function(e,t,n){"use strict";function r(){return"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches}n.d(t,{Y:function(){return r}})},7727:function(){},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},619:function(e,t,n){"use strict";var r=n(7294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.Z=function(e,t){void 0===t&&(t={});var a,l=t,c=l.volume,i=void 0===c?1:c,u=l.playbackRate,s=void 0===u?1:u,f=l.soundEnabled,d=void 0===f||f,p=l.interrupt,h=void 0!==p&&p,m=l.onload,v=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(l,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),y=r.useRef(null),g=r.useRef(!1),b=r.useState(null),w=b[0],j=b[1],k=r.useState(null),x=k[0],E=k[1],S=function(){"function"===typeof m&&m.call(this),g.current&&j(1e3*this.duration()),E(this)};a=function(){return n.e(766).then(n.t.bind(n,1766,23)).then((function(t){var n;g.current||(y.current=null!==(n=t.Howl)&&void 0!==n?n:t.default.Howl,g.current=!0,new y.current(o({src:Array.isArray(e)?e:[e],volume:i,rate:s,onload:S},v)))})),function(){g.current=!1}},(0,r.useEffect)(a,[]),r.useEffect((function(){y.current&&x&&E(new y.current(o({src:Array.isArray(e)?e:[e],volume:i,onload:S},v)))}),[JSON.stringify(e)]),r.useEffect((function(){x&&(x.volume(i),x.rate(s))}),[i,s]);var A=r.useCallback((function(e){"undefined"===typeof e&&(e={}),x&&(d||e.forceSoundEnabled)&&(h&&x.stop(),e.playbackRate&&x.rate(e.playbackRate),x.play(e.id))}),[x,d,h]),L=r.useCallback((function(e){x&&x.stop(e)}),[x]),N=r.useCallback((function(e){x&&x.pause(e)}),[x]);return[A,{sound:x,stop:L,pause:N,duration:w}]}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);