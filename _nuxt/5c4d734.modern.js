(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{348:function(t,e,r){"use strict";var n=r(70),o=r(35),c=t=>{if(t&&"click"===t.type){var e=t.target&&t.target.closest?t.target.closest("a[href]"):null;if(!(!e||"click"!==t.type||e.__vue__||e.closest(".bd-example")||e.closest("pre")||t.defaultPrevented)){var r=e.getAttribute("href");r&&0===r.indexOf("/")&&0!==r.indexOf("//")?(t.preventDefault(),"undefined"!=typeof window&&window.$nuxt&&window.$nuxt.$router.push(r)):r&&0===r.indexOf("#")&&Object(o.i)(t,r)}}};e.a={name:"BVSection",functional:!0,props:{tag:{type:String,default:"section"},play:{type:Boolean,default:!1}},render(t,e){var{props:r,data:data,children:o}=e,l=[];return r.play&&l.push({name:"play"}),t(r.tag,Object(n.a)(data,{class:["bd-content"],directives:l,on:{click:c}}),[o])}}},350:function(t,e,r){"use strict";var n=r(70);e.a={name:"BVMain",functional:!0,props:{tag:{type:String,default:"main"}},render(t,e){var{props:r,data:data,children:o}=e;return t(r.tag,Object(n.a)(data,{staticClass:"bd-main"}),[o])}}},351:function(t,e,r){"use strict";r(24),r(191),r(20);var n=r(35),o=r(61),c={};e.a={head(){return{title:this.headTitle,meta:this.headMeta}},computed:{headTitle(){var t=this.$route.name,title="",section="";return this.meta&&this.meta.title&&(title=this.meta.title),/^docs-components/.test(t)?section="Components":/^docs-directives/.test(t)?section="Directives":/^docs-reference/.test(t)&&(section="Reference"),[title,section,"BootstrapVue"].filter(Boolean).join(" | ")},headMeta(){var section=this.$route.name.split("-")[1],t=section?o.j.find((t=>t.base==="".concat(section,"/"))):null,e=this.meta&&this.meta.description?this.meta.description:t&&t.description?t.description:o.f,meta=[{hid:"og:title",name:"og:title",property:"og:title",content:this.headTitle}];return e&&(meta.push({hid:"description",name:"description",content:e}),meta.push({hid:"og:description",name:"og:description",property:"og:description",content:e})),meta}},created(){this.$_filterTimer=null,this.$nextTick((()=>{var t="".concat(this.$route.name,"_").concat(this.$route.params.slug||""),e=c[t]||(c[t]=Object(n.k)(this.baseTOC||{},this.meta||null));this.$root.$emit("docs-set-toc",e)}))},mounted(){this.clearScrollTimeout(),this.focusScroll()},updated(){this.clearScrollTimeout(),this.focusScroll()},beforeDestroy(){this.clearScrollTimeout()},methods:{clearScrollTimeout(){clearTimeout(this.$_scrollTimeout),this.$_scrollTimeout=null},focusScroll(){var t=this.$route.hash;this.$nextTick((()=>{var e;t&&(e=this.$el.querySelector('[id="'.concat(t.replace("#",""),'"]')),this.scrollIntoView(e)),e||(e=this.$el.querySelector("h1")),e&&(e.tabIndex=-1,e.focus())}))},scrollIntoView(t){if(t){var e=document.scrollingElement||document.documentElement||document.body;this.clearScrollTimeout(),this.$_scrollTimeout=setTimeout((()=>{Object(n.j)(e,Object(n.e)(t)-70,100)}),100)}}}}},353:function(t,e,r){},356:function(t,e,r){"use strict";r(353)},358:function(t,e,r){"use strict";r(27),r(20),r(24),r(191);var main=r(350),section=r(348),n=r(61).j.reduce(((t,g)=>(t[g.base.replace(/\/$/,"")]=g,t)),{}),o={name:"BVSectionToc",components:{Main:main.a,Section:section.a},layout:"docs",computed:{slug(){return this.$route.path.replace(/^\//,"").split("/")[1]||""},id(){return"bd-section-toc-".concat(this.slug)},group(){return n[this.slug]||{}},groupDescription(){return this.group.description},groupTitle(){var title=this.group.title||"";return"Компоненты"===title?"Группы компонентов":"Разное"===title?"Разное":title||""},pages(){return this.group.pages||[]}}},c=(r(356),r(33)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Main",[r("Section",{attrs:{tag:"header"}},[r("h1",{staticClass:"bv-no-focus-ring",attrs:{id:t.id,tabindex:"-1"}},[r("span",{staticClass:"bd-content-title"},[r("span",{staticClass:"small text-muted"},[t._v("Содержание страницы:")]),t._v(" "+t._s(t.groupTitle)+"\n      ")])]),t._v(" "),t.groupDescription?r("p",{staticClass:"bd-lead"},[t._v(t._s(t.groupDescription))]):t._e()]),t._v(" "),r("Section",[r("b-list-group",{staticClass:"mb-5",attrs:{tag:"nav","aria-label":t.groupTitle+" section navigation"}},t._l(t.pages,(function(e){return r("b-list-group-item",{key:e.slug,attrs:{to:"/docs/"+t.slug+"/"+e.slug,"active-class":""}},[r("strong",{staticClass:"text-primary"},[t._v(t._s(e.title))]),t._v(" —\n        "),e.new?r("b-badge",{attrs:{variant:"success"}},[t._v("НОВОЕ")]):t._e(),t._v(" "),r("span",{staticClass:"text-muted"},[t._v(t._s(e.description))]),t._v(" "),e.version?r("b-badge",{attrs:{variant:"secondary"}},[t._v("v"+t._s(e.version))]):t._e()],1)})),1)],1)],1)}),[],!1,null,"90272812",null);e.a=component.exports},504:function(t,e,r){"use strict";r.r(e);var n=r(358),o=r(351);e.default={name:"BVDocsComponentsIndex",extends:n.a,mixins:[o.a]}}}]);