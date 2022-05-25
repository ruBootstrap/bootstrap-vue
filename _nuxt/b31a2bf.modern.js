(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{348:function(t,e,o){"use strict";var n=o(70),r=o(35),c=t=>{if(t&&"click"===t.type){var e=t.target&&t.target.closest?t.target.closest("a[href]"):null;if(!(!e||"click"!==t.type||e.__vue__||e.closest(".bd-example")||e.closest("pre")||t.defaultPrevented)){var o=e.getAttribute("href");o&&0===o.indexOf("/")&&0!==o.indexOf("//")?(t.preventDefault(),"undefined"!=typeof window&&window.$nuxt&&window.$nuxt.$router.push(o)):o&&0===o.indexOf("#")&&Object(r.i)(t,o)}}};e.a={name:"BVSection",functional:!0,props:{tag:{type:String,default:"section"},play:{type:Boolean,default:!1}},render(t,e){var{props:o,data:data,children:r}=e,l=[];return o.play&&l.push({name:"play"}),t(o.tag,Object(n.a)(data,{class:["bd-content"],directives:l,on:{click:c}}),[r])}}},350:function(t,e,o){"use strict";var n=o(70);e.a={name:"BVMain",functional:!0,props:{tag:{type:String,default:"main"}},render(t,e){var{props:o,data:data,children:r}=e;return t(o.tag,Object(n.a)(data,{staticClass:"bd-main"}),[r])}}},351:function(t,e,o){"use strict";o(24),o(191),o(20);var n=o(35),r=o(61),c={};e.a={head(){return{title:this.headTitle,meta:this.headMeta}},computed:{headTitle(){var t=this.$route.name,title="",section="";return this.meta&&this.meta.title&&(title=this.meta.title),/^docs-components/.test(t)?section="Components":/^docs-directives/.test(t)?section="Directives":/^docs-reference/.test(t)&&(section="Reference"),[title,section,"BootstrapVue"].filter(Boolean).join(" | ")},headMeta(){var section=this.$route.name.split("-")[1],t=section?r.j.find((t=>t.base==="".concat(section,"/"))):null,e=this.meta&&this.meta.description?this.meta.description:t&&t.description?t.description:r.f,meta=[{hid:"og:title",name:"og:title",property:"og:title",content:this.headTitle}];return e&&(meta.push({hid:"description",name:"description",content:e}),meta.push({hid:"og:description",name:"og:description",property:"og:description",content:e})),meta}},created(){this.$_filterTimer=null,this.$nextTick((()=>{var t="".concat(this.$route.name,"_").concat(this.$route.params.slug||""),e=c[t]||(c[t]=Object(n.k)(this.baseTOC||{},this.meta||null));this.$root.$emit("docs-set-toc",e)}))},mounted(){this.clearScrollTimeout(),this.focusScroll()},updated(){this.clearScrollTimeout(),this.focusScroll()},beforeDestroy(){this.clearScrollTimeout()},methods:{clearScrollTimeout(){clearTimeout(this.$_scrollTimeout),this.$_scrollTimeout=null},focusScroll(){var t=this.$route.hash;this.$nextTick((()=>{var e;t&&(e=this.$el.querySelector('[id="'.concat(t.replace("#",""),'"]')),this.scrollIntoView(e)),e||(e=this.$el.querySelector("h1")),e&&(e.tabIndex=-1,e.focus())}))},scrollIntoView(t){if(t){var e=document.scrollingElement||document.documentElement||document.body;this.clearScrollTimeout(),this.$_scrollTimeout=setTimeout((()=>{Object(n.j)(e,Object(n.e)(t)-70,100)}),100)}}}}},352:function(t,e,o){},354:function(t,e,o){"use strict";o(20);var n=o(35),r={name:"BVQuickLinks",data:()=>({toc:{},offset:0,expanded:!1}),computed:{hasContent(){return!!this.toc.toc},toogleText(){return"".concat(this.expanded?"Скрыть":"Показать"," оглавление страницы")}},created(){this.$root.$on("docs-set-toc",(t=>{this.expanded=!1,this.toc=t}))},mounted(){var t=document.body.querySelector("header.navbar");t&&(this.offset=t.offsetHeight+6)},methods:{scrollIntoView(t,e){t.preventDefault(),t.stopPropagation();var o=(e||"").replace(/#/g,""),r=document.body.querySelector('[id="'.concat(o,'"]'));if(r){var c=document.scrollingElement||document.documentElement||document.body;Object(n.j)(c,Object(n.e)(r)-70,100,(()=>{r.tabIndex=-1,r.focus()}))}}}},c=(o(355),o(33)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{class:["bd-quick-links","mb-3","d-xl-none",{"d-none":!t.hasContent}],attrs:{"aria-hidden":t.hasContent?null:"true"}},[t.hasContent?o("header",[o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.bd-quick-links-collapse",modifiers:{"bd-quick-links-collapse":!0}}],staticClass:"font-weight-bold",attrs:{variant:"outline-secondary",size:"sm",block:""}},[t._v("\n      "+t._s(t.toogleText)+"\n    ")])],1):t._e(),t._v(" "),t.hasContent?o("b-collapse",{attrs:{id:"bd-quick-links-collapse",tag:"ul"},model:{value:t.expanded,callback:function(e){t.expanded=e},expression:"expanded"}},t._l(t.toc.toc,(function(h2){return o("li",{key:h2.href},[o("b-link",{attrs:{href:h2.href},on:{click:function(e){return t.scrollIntoView(e,h2.href)}}},[o("span",{domProps:{innerHTML:t._s(h2.label)}})]),t._v(" "),h2.toc&&h2.toc.length>0?o("ul",{key:"sub-"+h2.href},t._l(h2.toc,(function(h3){return o("li",{key:h3.href},[o("b-link",{attrs:{href:h3.href},on:{click:function(e){return t.scrollIntoView(e,h3.href)}}},[o("span",{domProps:{innerHTML:t._s(h3.label)}})])],1)})),0):t._e()],1)})),0):t._e()],1)}),[],!1,null,"3b631bed",null);e.a=component.exports},355:function(t,e,o){"use strict";o(352)},359:function(t,e,o){"use strict";var main=o(350),n=o(354),section=o(348),r={name:"BVReload",render(t){var e=t("h1",[t("span",{staticClass:"bd-content-title"},"Updated documentation")]),o=t("p",{staticClass:"lead"},"Updated documentation is available. Please reload."),n=t("b-button",{props:{variant:"primary"},on:{click:()=>{window.location.reload(!0)}}},"Reload page");return t(section.a,[e,o,t("p",[n])])}},c=o(70);e.a={name:"BVMainDocs",functional:!0,props:{tag:{type:String,default:"main"},titleLead:{type:String,default:""},body:{type:String,default:""},meta:{type:Object,default:null},loadError:{type:Boolean,default:!1}},render(t,e){var{props:o,data:data,children:l}=e,{tag:d,titleLead:m,body:body,meta:meta,loadError:h}=o,{version:f}=meta||{},v=t(section.a,{props:{tag:"header",play:!1},domProps:{innerHTML:m||""}}),y=t();f&&(y=t(section.a,{props:{play:!1}},[t("p",{staticClass:"font-italic"},["Доступно в BootstrapVue с ",t("code",{staticClass:"text-nowrap"},"v".concat(f))])]));var E=h?t(r):t(),k=t(n.a),T=t(section.a,{props:{play:!0},domProps:{innerHTML:body||""}});return t(main.a,Object(c.a)(data,{props:{tag:d}}),[v,E,y,k,T,l])}}},411:function(t,e,o){var map={"./accessibility/README.md":[489,64],"./changelog/README.md":[490,65],"./color-variants/README.md":[491,70],"./contributing/README.md":[492,71],"./images/README.md":[493,72],"./router-links/README.md":[494,73],"./settings/README.md":[495,74],"./size-props/README.md":[496,75],"./spacing-classes/README.md":[497,76],"./starter-templates/README.md":[498,77],"./theming/README.md":[499,66],"./third-party/README.md":[500,67],"./utility-classes/README.md":[501,68],"./validation/README.md":[502,69]};function n(t){if(!o.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return o.e(e[1]).then((function(){return o.t(n,7)}))}n.keys=function(){return Object.keys(map)},n.id=411,t.exports=n},515:function(t,e,o){"use strict";o.r(e);var n=o(21),r=(o(17),o(34),o(19),o(359)),c=o(351),l=o(61);e.default={name:"BDVReference",mixins:[c.a],layout:"docs",validate(t){var{params:e}=t;return Boolean(l.t[e.slug])},asyncData:t=>Object(n.a)((function*(){var{params:e}=t,n=e.slug,meta=l.t[n],r=(yield(t=>{try{return o(411)("./".concat(t,"/README.md"))}catch(t){return{default:{loadError:!0}}}})(n)).default,{titleLead:c="",body:body="",baseTOC:d={},loadError:m=!1}=r;return{meta:meta,titleLead:c,body:body,baseTOC:d,loadError:m}}))(),render(t){return t(r.a,{staticClass:"bd-components",props:{meta:this.meta,titleLead:this.titleLead,body:this.body,loadError:this.loadError}})}}}}]);