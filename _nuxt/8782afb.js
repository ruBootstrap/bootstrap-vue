(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{442:function(t,e,r){"use strict";var main=r(433),o=r(437),section=r(431),n={name:"BVReload",render:function(t){var e=t("h1",[t("span",{staticClass:"bd-content-title"},"Updated documentation")]),r=t("p",{staticClass:"lead"},"Updated documentation is available. Please reload."),o=t("b-button",{props:{variant:"primary"},on:{click:function(){window.location.reload(!0)}}},"Reload page");return t(section.a,[e,r,t("p",[o])])}},d=r(100);e.a={name:"BVMainDocs",functional:!0,props:{tag:{type:String,default:"main"},titleLead:{type:String,default:""},body:{type:String,default:""},meta:{type:Object,default:null},loadError:{type:Boolean,default:!1}},render:function(t,e){var r=e.props,data=e.data,E=e.children,m=r.tag,c=r.titleLead,body=r.body,meta=r.meta,l=r.loadError,D=(meta||{}).version,M=t(section.a,{props:{tag:"header",play:!1},domProps:{innerHTML:c||""}}),R=t();D&&(R=t(section.a,{props:{play:!1}},[t("p",{staticClass:"font-italic"},["Available in BootstrapVue since ",t("code",{staticClass:"text-nowrap"},"v".concat(D))])]));var A=l?t(n):t(),f=t(o.a),v=t(section.a,{props:{play:!0},domProps:{innerHTML:body||""}});return t(main.a,Object(d.a)(data,{props:{tag:m}}),[M,A,R,f,v,E])}}},491:function(t,e,r){var map={"./alert/README.md":[516,8],"./aspect/README.md":[517,9],"./avatar/README.md":[518,20],"./badge/README.md":[519,31],"./breadcrumb/README.md":[520,42],"./button-group/README.md":[522,54],"./button-toolbar/README.md":[523,55],"./button/README.md":[521,53],"./calendar/README.md":[524,56],"./card/README.md":[525,57],"./carousel/README.md":[526,10],"./collapse/README.md":[527,11],"./dropdown/README.md":[528,12],"./embed/README.md":[529,13],"./form-checkbox/README.md":[531,15],"./form-datepicker/README.md":[532,16],"./form-file/README.md":[533,17],"./form-group/README.md":[534,18],"./form-input/README.md":[535,19],"./form-radio/README.md":[536,21],"./form-rating/README.md":[537,22],"./form-select/README.md":[538,23],"./form-spinbutton/README.md":[539,24],"./form-tags/README.md":[540,25],"./form-textarea/README.md":[541,26],"./form-timepicker/README.md":[542,27],"./form/README.md":[530,14],"./image/README.md":[543,28],"./input-group/README.md":[544,29],"./jumbotron/README.md":[545,30],"./layout/README.md":[546,32],"./link/README.md":[547,33],"./list-group/README.md":[548,34],"./media/README.md":[549,35],"./modal/README.md":[550,36],"./nav/README.md":[551,37],"./navbar/README.md":[552,38],"./overlay/README.md":[553,39],"./pagination-nav/README.md":[555,41],"./pagination/README.md":[554,40],"./popover/README.md":[556,43],"./progress/README.md":[557,44],"./sidebar/README.md":[558,45],"./skeleton/README.md":[559,46],"./spinner/README.md":[560,47],"./table/README.md":[561,48],"./tabs/README.md":[562,49],"./time/README.md":[563,50],"./toast/README.md":[564,51],"./tooltip/README.md":[565,52]};function o(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return r.e(e[1]).then((function(){return r.t(o,7)}))}o.keys=function(){return Object.keys(map)},o.id=491,t.exports=o},596:function(t,e,r){"use strict";r.r(e);r(18),r(20),r(32);var o=r(29),n=(r(63),r(30)),d=r(440),E=r(458),m=r(447),c=r(442),l=r(431),D=r(434),M=r(89),R=function(t){try{return r(491)("./".concat(t,"/README.md"))}catch(t){return{default:{loadError:!0}}}};e.default={name:"BDVComponents",mixins:[D.a],layout:"docs",validate:function(t){var e=t.params;return Boolean(M.g[e.slug])},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o,meta,n,d,E,m,body,c,l,D,A;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,o=r.slug,meta=M.g[o],e.next=5,R(o);case 5:return n=e.sent.default,d=n.titleLead,E=void 0===d?"":d,m=n.body,body=void 0===m?"":m,c=n.baseTOC,l=void 0===c?{}:c,D=n.loadError,A=void 0!==D&&D,e.abrupt("return",{meta:meta,titleLead:E,body:body,baseTOC:l,loadError:A});case 8:case"end":return e.stop()}}),e)})))()},render:function(t){var e=t(l.a,{class:["bd-component-reference"]},[t(d.a,{props:{id:"component-reference"}},"Component reference")].concat(Object(o.a)(this.meta.components.map((function(e){var component=e.component,r=e.events,o=e.rootEventListeners,n=e.slots,d=e.aliases,m=e.props,c=e.version;return t(E.a,{props:{component:component,events:r,rootEventListeners:o,slots:n,aliases:d,propsMeta:m,version:c}})}))),[t(m.a,{props:{meta:this.meta}})]));return t(c.a,{key:this.$route.path,staticClass:"bd-components",props:{meta:this.meta,titleLead:this.titleLead,body:this.body,loadError:this.loadError}},[e])}}}}]);