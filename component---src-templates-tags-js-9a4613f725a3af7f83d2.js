(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{MN1z:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),l=a("7oih"),i=a("EYWl"),c=a("Nh35");var p=function(e){var t,n;function p(){return e.apply(this,arguments)||this}return n=e,(t=p).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,p.prototype.render=function(){var e=this.props,t=e.data,n=e.pageContext,p=t.site.siteMetadata.title,m=t.allMarkdownRemark.edges,s=[];return m.forEach((function(e){var t=e.node;t.frontmatter.top?s.unshift(t):s.push(t)})),r.a.createElement(l.a,{location:this.props.location,title:p,mainHeadTitle:""},r.a.createElement(i.a,{title:""+n.tag}),r.a.createElement("div",{className:"Main-list-class"},s.map((function(e){var t=e.frontmatter.title||e.fields.slug;return r.a.createElement(o.Link,{className:"main-img-left-layout"+(e.frontmatter.top_img?" main-have-img":" main-no-img"),to:e.fields.slug,key:e.fields.slug},e.frontmatter.top_img?r.a.createElement("div",{className:"left-img"},r.a.createElement("img",{src:a("nk+4")("./"+e.frontmatter.top_img),alt:""})):"",r.a.createElement("header",null,t,e.frontmatter.top&&r.a.createElement("div",{className:"top-badge"},"置顶")),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}),r.a.createElement("div",{className:"main-nav"},r.a.createElement("span",null,e.frontmatter.tags.map((function(e){return r.a.createElement("i",{key:e},e)}))),r.a.createElement("small",null,e.frontmatter.date)))})),r.a.createElement(c.a,{path:"/tags/"+n.tag+"/",pageContext:n})))},p}(r.a.Component);t.default=p;var m="2895658460"},Nh35:function(e,t,a){"use strict";a("XfO3"),a("HEwt");var n=a("q1tI"),r=a.n(n),o=a("Wbzz");var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.pageContext,t=e.totalPage,a=e.currentPage,n=this.props.path;return r.a.createElement("div",{className:"Pagination-class"},r.a.createElement("ul",null,a-2-1>=1&&r.a.createElement("li",null,r.a.createElement(o.Link,{to:""+n},"1")),a-2-1>1&&r.a.createElement("li",null,r.a.createElement("span",null,"...")),Array.from({length:2}).map((function(e,t){var l=a-2+t;return l>=1&&r.a.createElement("li",{key:""+n+l},r.a.createElement(o.Link,{to:1===l?""+n:""+n+l},l))})),r.a.createElement("li",{className:"center"}," ",a," "),Array.from({length:2}).map((function(e,l){var i=a+l+1;return i<=t&&r.a.createElement("li",{key:""+n+i},r.a.createElement(o.Link,{to:""+n+i},i))})),a+2+1<t&&r.a.createElement("li",null,r.a.createElement("span",null,"...")),a+2+1<=t&&r.a.createElement("li",null,r.a.createElement(o.Link,{to:""+n+t},t))))},n}(n.Component);t.a=l},"nk+4":function(e,t,a){var n={"./1.png":"txKD","./2.png":"kR/k","./2020_01_20.jpg":"qXya","./3.png":"mY32","./4.png":"dta2","./5.png":"VDrO","./6.png":"h2bC","./7.png":"xO7t","./8.png":"XTZa"};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id="nk+4"},qXya:function(e,t,a){e.exports=a.p+"static/2020_01_20-a750d0086c978787b62f8437819c5ba8.jpg"}}]);
//# sourceMappingURL=component---src-templates-tags-js-9a4613f725a3af7f83d2.js.map