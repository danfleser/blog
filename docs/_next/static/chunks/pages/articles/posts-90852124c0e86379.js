(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{8626:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/posts",function(){return r(9468)}])},2899:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),s=r(7294),a=r(4481);function c(){var e,t=function(){return e&&(0,a._0)(e.value)};return(0,s.useEffect)((function(){(e=(0,a.dd)()).addEventListener("search",t)})),(0,n.jsx)("div",{className:"search-bar",children:(0,n.jsxs)("div",{className:"search",children:[(0,n.jsx)("input",{type:"search",placeholder:"Search..."}),(0,n.jsx)("button",{onClick:t,children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]})})}},6328:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),s=r(1664),a=r(5715);function c(e){var t=e.post;return e.shortArticle?(0,n.jsx)("article",{className:"app-post card","data-name":t.title,"data-tags":[],children:(0,n.jsxs)("section",{className:"app-post-content short-article",children:[(0,n.jsx)("section",{className:"app-post-image",children:(0,n.jsx)("a",{target:"_blank",href:t.articleUrl+"?utm_source=https://twitter.com/danfleser",rel:"noopener noreferrer",children:(0,n.jsx)("img",{alt:t.title,layout:"fill",src:t.imgSrc.substring(5).slice(0,-2)})})}),(0,n.jsxs)("section",{className:"app-post-info",children:[(0,n.jsxs)("header",{children:[(0,n.jsx)("h1",{children:(0,n.jsx)("a",{className:"title",target:"_blank",href:t.articleUrl+"?utm_source=https://twitter.com/danfleser",rel:"noopener noreferrer",children:t.title})}),(0,n.jsx)("p",{children:t.description})]}),(0,n.jsx)("section",{className:"post-details",children:(0,n.jsx)("div",{className:"date",children:t.readTime})})]})]})}):(0,n.jsx)("article",{className:"app-post card","data-name":t.frontmatter.title,"data-tags":t.frontmatter.tags,children:(0,n.jsxs)("section",{className:"app-post-content",children:[(0,n.jsx)("section",{className:"app-post-image",children:(0,n.jsx)(s.default,{href:"/posts/[slug]",as:"/posts/".concat(t.slug),passHref:!0,children:(0,n.jsx)("img",{alt:t.frontmatter.title,layout:"fill",src:r(425)("./".concat(t.frontmatter.cover_image))})})}),(0,n.jsxs)("section",{className:"app-post-info",children:[(0,n.jsxs)("header",{children:[(0,n.jsx)("h1",{children:(0,n.jsx)(s.default,{href:"/posts/[slug]",as:"/posts/".concat(t.slug),children:(0,n.jsx)("a",{className:"title",children:t.frontmatter.title})})}),(0,n.jsx)(a.Z,{date:t.frontmatter.date,readingTime:t.frontmatter.readingTime})]}),(0,n.jsx)("footer",{children:t.frontmatter.tags.map((function(e){return(0,n.jsx)("span",{className:"tag",children:e},e)}))})]})]})})}},292:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893),s=r(225);function a(){return(0,n.jsx)("article",{id:s.Np,className:"app-post card hidden",children:(0,n.jsx)("section",{className:" w-full md:max-w-full md:flex",children:(0,n.jsx)("section",{className:"p-4 pr-0 flex flex-col justify-between leading-normal",children:(0,n.jsx)("header",{children:(0,n.jsx)("h3",{children:"\ud83d\udd0d No result found :("})})})})})}},9468:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return h},default:function(){return p}});var n=r(5893),s=r(6328),a=r(2899),c=r(8582),i=r(619),l=r(4481);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,s,a=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(l){i=!0,s=l}finally{try{c||null==r.return||r.return()}finally{if(i)throw s}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e){var t=e.tags,r=u((0,i.Z)("/sounds/blur.mp3"),1)[0];return(0,n.jsxs)("article",{className:"app-post card",children:[(0,n.jsx)("header",{children:(0,n.jsxs)("h3",{className:"text-lg font-bold mb-2",children:[(0,n.jsx)("span",{className:"mr-1",children:"\ud83c\udff7\ufe0f"}),"Tags"]})}),(0,n.jsx)("section",{children:t.map((function(e){return(0,n.jsx)("span",{className:"tag","data-tag":e,onClick:function(){return(0,l.N8)(e,r)},children:e},e)}))})]})}var f=r(292),h=!0;function p(e){var t=e.posts,r=e.tags;return(0,n.jsxs)("article",{className:"article-card",children:[(0,n.jsx)(c.Z,{title:"Posts"}),(0,n.jsxs)("header",{className:"article-card-header",children:[(0,n.jsx)("h1",{children:"\ud83d\udcf0 Posts"}),(0,n.jsx)(a.Z,{})]}),(0,n.jsx)(d,{tags:r}),t.map((function(e){return(0,n.jsx)(s.Z,{post:e},e.slug)})),(0,n.jsx)(f.Z,{})]})}},9008:function(e,t,r){e.exports=r(5443)}},function(e){e.O(0,[67,81,774,888,179],(function(){return t=8626,e(e.s=t);var t}));var t=e.O();_N_E=t}]);