(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(9842)}])},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],l=!0,c=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);l=!0);}catch(i){c=!0,o=i}finally{try{l||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,l=(a=t(7294))&&a.__esModule?a:{default:a},c=t(6273),i=t(387),s=t(7190);var u={};function f(e,r,t,n){if(e&&c.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=i.useRouter(),a=l.default.useMemo((function(){var r=o(c.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?c.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),d=a.href,h=a.as,p=e.children,m=e.replace,v=e.shallow,y=e.scroll,g=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var j=(r=l.default.Children.only(p))&&"object"===typeof r&&r.ref,b=o(s.useIntersection({rootMargin:"200px"}),2),x=b[0],w=b[1],k=l.default.useCallback((function(e){x(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,x]);l.default.useEffect((function(){var e=w&&t&&c.isLocalURL(d),r="undefined"!==typeof g?g:n&&n.locale,o=u[d+"%"+h+(r?"%"+r:"")];e&&!o&&f(n,d,h,{locale:r})}),[h,d,w,g,t,n]);var N={ref:k,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,l,i){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),r[o?"replace":"push"](t,n,{shallow:a,locale:i,scroll:l}))}(e,n,d,h,m,v,y,g)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),c.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof g?g:n&&n.locale,M=n&&n.isLocaleDomain&&c.getDomainLocale(h,E,n&&n.locales,n&&n.domainLocales);N.href=M||c.addBasePath(c.addLocale(h,E,n&&n.defaultLocale))}return l.default.cloneElement(r,N)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],l=!0,c=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);l=!0);}catch(i){c=!0,o=i}finally{try{l||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!c,n=a.useRef(),s=o(a.useState(!1),2),u=s[0],f=s[1],d=a.useCallback((function(e){n.current&&(n.current(),n.current=void 0),t||u||e&&e.tagName&&(n.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=i.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return i.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,a=n.observer,l=n.elements;return l.set(e,r),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[t,r,u]);return a.useEffect((function(){if(!c&&!u){var e=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=t(7294),l=t(9311),c="undefined"!==typeof IntersectionObserver;var i=new Map},9842:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var n=t(5893),o=t(7294),a=t(1664),l=function(){localStorage.theme="light"===localStorage.theme?"dark":"light",document.documentElement.classList=localStorage.theme};function c(){return(0,n.jsx)("header",{className:"app-header",children:(0,n.jsx)("div",{className:"app-container",children:(0,n.jsxs)("div",{className:"content",children:[(0,n.jsx)(a.default,{href:"/",passHref:!0,children:(0,n.jsx)("h2",{className:"logo",children:"Dev blog"})}),(0,n.jsxs)("div",{className:"content",children:[(0,n.jsxs)("div",{className:"search",children:[(0,n.jsx)("input",{type:"text",placeholder:"Search..."}),(0,n.jsx)("button",{children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]}),(0,n.jsx)("div",{className:"darkMode",onClick:l,children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})})})]})]})})})}function i(){var e=(new Date).getFullYear();return(0,n.jsx)("footer",{className:"app-footer",children:(0,n.jsx)("div",{className:"app-container",children:(0,n.jsxs)("div",{className:"content",children:[(0,n.jsxs)("div",{className:"block mt-6 links",children:[(0,n.jsx)(a.default,{href:"/",passHref:!0,children:(0,n.jsx)("h2",{children:"\ud83c\udfe0 Home"})}),(0,n.jsx)(a.default,{href:"/miscellaneous/newsletter",passHref:!0,children:(0,n.jsx)("h2",{children:"\ud83d\udcf0 Newsletter"})}),(0,n.jsx)(a.default,{href:"/miscellaneous/privacy-policy",passHref:!0,children:(0,n.jsx)("h2",{children:"\ud83d\udd0f Privacy"})}),(0,n.jsx)(a.default,{href:"/miscellaneous/contact",passHref:!0,children:(0,n.jsx)("h2",{children:"\ud83d\udcec Contact"})})]}),(0,n.jsxs)("p",{className:"copyrights",children:["\xa9 ",e," Dan Fleser. All Rights Reserved."]})]})})})}t(5631);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){s(e,r,t[r])}))}return e}function f(e){var r=e.Component,t=e.pageProps;return(0,o.useEffect)((function(){"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),[]),(0,n.jsxs)("div",{className:"app",children:[(0,n.jsx)(c,{}),(0,n.jsx)("main",{children:(0,n.jsx)("div",{className:"app-container",children:(0,n.jsx)(r,u({},t))})}),(0,n.jsx)(i,{})]})}},5631:function(){},1664:function(e,r,t){e.exports=t(8418)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(1780),r(387)}));var t=e.O();_N_E=t}]);