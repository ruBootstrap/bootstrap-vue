(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{442:function(e,t,r){"use strict";var main=r(433),n=r(437),section=r(431),o={name:"BVReload",render:function(e){var t=e("h1",[e("span",{staticClass:"bd-content-title"},"Updated documentation")]),r=e("p",{staticClass:"lead"},"Updated documentation is available. Please reload."),n=e("b-button",{props:{variant:"primary"},on:{click:function(){window.location.reload(!0)}}},"Reload page");return e(section.a,[t,r,e("p",[n])])}},d=r(100);t.a={name:"BVMainDocs",functional:!0,props:{tag:{type:String,default:"main"},titleLead:{type:String,default:""},body:{type:String,default:""},meta:{type:Object,default:null},loadError:{type:Boolean,default:!1}},render:function(e,t){var r=t.props,data=t.data,c=t.children,l=r.tag,m=r.titleLead,body=r.body,meta=r.meta,f=r.loadError,v=(meta||{}).version,E=e(section.a,{props:{tag:"header",play:!1},domProps:{innerHTML:m||""}}),y=e();v&&(y=e(section.a,{props:{play:!1}},[e("p",{staticClass:"font-italic"},["Доступно в BootstrapVue с ",e("code",{staticClass:"text-nowrap"},"v".concat(v))])]));var h=f?e(o):e(),D=e(n.a),w=e(section.a,{props:{play:!0},domProps:{innerHTML:body||""}});return e(main.a,Object(d.a)(data,{props:{tag:l}}),[E,h,y,D,w,c])}}},492:function(e,t,r){var map={"./hover/README.md":[566,58],"./popover/README.md":[567,59],"./scrollspy/README.md":[568,60],"./toggle/README.md":[569,61],"./tooltip/README.md":[570,62],"./visible/README.md":[571,63]};function n(e){if(!r.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],n=t[0];return r.e(t[1]).then((function(){return r.t(n,7)}))}n.keys=function(){return Object.keys(map)},n.id=492,e.exports=n},597:function(e,t,r){"use strict";r.r(t);r(32),r(63);var n=r(30),o=r(440),d=r(447),c=r(442),l=r(431),m=r(434),f=r(89),v=function(e){try{return r(492)("./".concat(e,"/README.md"))}catch(e){return{default:{loadError:!0}}}};t.default={name:"BDVDirectives",mixins:[m.a],layout:"docs",validate:function(e){var t=e.params;return Boolean(f.h[t.slug])},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,meta,o,d,c,l,body,m,E,y,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,n=r.slug,meta=f.h[n],t.next=5,v(n);case 5:return o=t.sent.default,d=o.titleLead,c=void 0===d?"":d,l=o.body,body=void 0===l?"":l,m=o.baseTOC,E=void 0===m?{}:m,y=o.loadError,h=void 0!==y&&y,t.abrupt("return",{meta:meta,titleLead:c,body:body,baseTOC:E,loadError:h});case 8:case"end":return t.stop()}}),t)})))()},render:function(e){var t=e(l.a,{class:["bd-component-reference"]},[e(o.a,{props:{id:"directive-reference"}},"Directive reference"),e(d.a,{props:{meta:this.meta}})]);return e(c.a,{staticClass:"bd-components",props:{meta:this.meta,titleLead:this.titleLead,body:this.body,loadError:this.loadError}},[t])}}}}]);