(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{354:function(e,t,r){"use strict";r(18),r(19);t.a={name:"BVCarbonAd",props:{id:{type:String,default:"_carbonads_js"},url:{type:String,default:"//cdn.carbonads.com/carbon.js"},serve:{type:String,default:"CE7ITK77"},placement:{type:String,default:"bootstrap-vuejsorg"}},data:()=>({mounted:!1}),computed:{src(){return"".concat(this.url,"?serve=").concat(this.serve,"&placement=").concat(this.placement)}},mounted(){var e=document.querySelectorAll('head > script[id="_carbonads_projs"]');for(var t of e)try{t.parentNode.removeChild(t)}catch(e){}this.$nextTick(()=>{requestAnimationFrame(()=>{this.mounted=!0})})},beforeDestroy(){this.mounted=!1},render(e){var t=e();return this.mounted&&(t=e("script",{attrs:{id:this.id,async:"async",type:"text/javascript",src:this.src}})),e("aside",{staticClass:"bv-carbon-ad"},[t])}}},367:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35),core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(18),core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(126),core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(37),core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(20),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(34),core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(19),core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__),_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(6),vue__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(15),vue__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_8__),lodash_debounce__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(177),lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_9__),codesandbox_lib_api_define__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(383),codesandbox_lib_api_define__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(codesandbox_lib_api_define__WEBPACK_IMPORTED_MODULE_10__),_utils_needs_transpiler__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(180),_content__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(63),_content__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(51),_content__WEBPACK_IMPORTED_MODULE_13___namespace=__webpack_require__.t(51,1),_components_carbon_ad__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(354),_components_code_mirror__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(386);function ownKeys(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(t){Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var DEFAULT_HTML='<div>\n  <b-button size="sm" @click="toggle">\n    {{ show ? \'Hide\' : \'Show\' }} Alert\n  </b-button>\n  <b-alert\n    v-model="show"\n    class="mt-3"\n    dismissible\n    @dismissed="dismissed"\n  >\n    Hello {{ name }}!\n  </b-alert>\n</div>',DEFAULT_JS="{\n  data() {\n    return {\n      name: 'BootstrapVue',\n      show: true\n    }\n  },\n  watch: {\n    show(newVal) {\n      console.log('Alert is now ' + (newVal ? 'visible' : 'hidden'))\n    }\n  },\n  methods: {\n    toggle() {\n      console.log('Toggle button clicked')\n      this.show = !this.show\n    },\n    dismissed() {\n      console.log('Alert dismissed')\n    }\n  }\n}",storage="undefined"!=typeof window&&window.localStorage||null,STORAGE_KEY_PREFIX="BV_playground",STORAGE_KEYS={html:"".concat(STORAGE_KEY_PREFIX,"_html"),js:"".concat(STORAGE_KEY_PREFIX,"_js"),layout:"".concat(STORAGE_KEY_PREFIX,"_layout"),timestamp:"".concat(STORAGE_KEY_PREFIX,"_ts")},STORAGE_MAX_RETENTION=6048e5,removeNode=e=>e&&e.parentNode&&e.parentNode.removeChild(e),indent=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,{indent:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{indent:" "};return 0===t?e:e.replace(/^(?!\s*$)/gm,r.repeat(t))};__webpack_exports__.a={components:{BVCarbonAd:_components_carbon_ad__WEBPACK_IMPORTED_MODULE_14__.a,BVCodeMirror:_components_code_mirror__WEBPACK_IMPORTED_MODULE_15__.a},data:()=>({html:"",js:"",compiledJs:null,logIdx:1,messages:[],vertical:!1,full:!1,isOk:!1,loading:!1,ready:!1,compiling:!1,building:!1}),head(){var title="".concat(this.title," | BootstrapVue"),e="Interactively play and test BootstrapVue components online.";return{title:title,meta:[{hid:"og:title",name:"og:title",property:"og:title",content:title},{hid:"og:description",name:"og:description",property:"og:description",content:e},{hid:"description",name:"description",content:e}]}},computed:{title:()=>"Online Playground",isDefault(){return this.js.trim()===DEFAULT_JS.trim()&&this.html.trim()===DEFAULT_HTML.trim()},isBusy(){return this.compiling||this.building||this.loading||!this.ready},needsTranspiler:()=>_utils_needs_transpiler__WEBPACK_IMPORTED_MODULE_11__.a,appData(){return{html:this.html.trim(),js:this.compiledJs}},layout(){return this.full?"full":this.vertical?"vertical":"horizontal"},exportData(){var html=this.html.trim(),e=this.js.trim()||"{}",t="{}"===e?"{ el: '#app' }":e.replace(/^\{/,"{\r\n  el: '#app',");return t="new Vue(".concat(t,")"),t="window.onload = () => {\r\n".concat(indent(t,2),"\r\n}"),{html:html,js:e,css:"body { padding: 1rem; }",extendedHtml:'<div id="app">\r\n'.concat(indent(html,2),"\r\n</div>"),extendedJs:t,externalCss:["//unpkg.com/bootstrap@".concat(_content__WEBPACK_IMPORTED_MODULE_12__.c,"/dist/css/bootstrap.min.css"),"//unpkg.com/bootstrap-vue@".concat(_content__WEBPACK_IMPORTED_MODULE_13__.d,"/dist/bootstrap-vue.css")],externalJs:["//unpkg.com/babel-polyfill/dist/polyfill.min.js","//unpkg.com/vue@".concat(_content__WEBPACK_IMPORTED_MODULE_12__.u,"/dist/vue.min.js"),"//unpkg.com/bootstrap-vue@".concat(_content__WEBPACK_IMPORTED_MODULE_13__.d,"/dist/bootstrap-vue.js"),"//unpkg.com/bootstrap-vue@".concat(_content__WEBPACK_IMPORTED_MODULE_13__.d,"/dist/bootstrap-vue-icons.js")]}},codepenData(){var{css:e,extendedHtml:t,extendedJs:r,externalCss:o,externalJs:n}=this.exportData,data={editors:"101",layout:"left",html_pre_processor:"none",css_pre_processor:"none",css_prefix:"autoprefixer",js_pre_processor:"babel",head:'<meta name="viewport" content="width=device-width">',css_external:o.join(";"),js_external:n.join(";"),html:t,js:r,css:e};return JSON.stringify(data)},codesandboxData(){var{html:html,js:e,css:t}=this.exportData,r=["<template>",indent(html,2),"</template>","","<script>",indent("export default ".concat(e),2),"<\/script>","","<style>",indent(t,2),"</style>"].join("\r\n").replace(/\\\//g,"/"),o=["import Vue from 'vue'","import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'","import App from './App'","","import 'bootstrap/dist/css/bootstrap.css'","import 'bootstrap-vue/dist/bootstrap-vue.css'","","Vue.use(BootstrapVue)","Vue.use(BootstrapVueIcons)","","new Vue({ el: '#app', render: h => h(App) })"].join("\r\n"),n={bootstrap:_content__WEBPACK_IMPORTED_MODULE_12__.c,"bootstrap-vue":_content__WEBPACK_IMPORTED_MODULE_13__.d,vue:_content__WEBPACK_IMPORTED_MODULE_12__.u};return Object(codesandbox_lib_api_define__WEBPACK_IMPORTED_MODULE_10__.getParameters)({files:{"App.vue":{content:r},"index.html":{content:'<div id="app"></div>'},"index.js":{content:o},"package.json":{content:{scripts:{serve:"vue-cli-service serve",build:"vue-cli-service build"},dependencies:n,devDependencies:{"@vue/cli-service":"^4.3.0"}}}}})},fakeConsole(){var e,t,r,o,n,_,l=this.log,c=this.clear;try{e=window.console,t=window.console.info,r=window.console.log,o=window.console.warn,n=window.console.error,_=window.console.clear}catch(e){}return{info(){try{l("info",...arguments),t.apply(e,arguments)}catch(e){}},log(){try{l("info",...arguments),r.apply(e,arguments)}catch(e){}},warn(){try{l("warning",...arguments),o.apply(e,arguments)}catch(e){}},error(){try{l("danger",...arguments),n.apply(e,arguments)}catch(e){}},clear(){try{c(),_.apply(e)}catch(e){}}}}},watch:{layout(e,t){e!==t&&this.saveToStorage()}},created(){this.playVM=null,this.contentUnWatch=null,this.jsUnWatch=null,this.run=()=>{},this.compileJs=()=>{},this.compiler=code=>code},beforeMount(){this.loadFromStorage()},mounted(){this.loading=_utils_needs_transpiler__WEBPACK_IMPORTED_MODULE_11__.a,_utils_needs_transpiler__WEBPACK_IMPORTED_MODULE_11__.a?this.$nextTick(()=>{this.$nuxt&&this.$nuxt.$loading&&this.$nuxt.$loading.start(),Promise.all([__webpack_require__.e(3),__webpack_require__.e(1)]).then(__webpack_require__.bind(null,346)).then(e=>{this.compiler=e.default||e,this.loading=!1,this.$nuxt&&this.$nuxt.$loading&&this.$nuxt.$loading.finish(),this.doSetup(750)})}):this.doSetup()},beforeDestroy(){this.jsUnWatch&&this.jsUnWatch(),this.contentUnWatch&&this.contentUnWatch(),this.$isServer||this.destroyVM()},methods:{doSetup(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;this.run=lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default()(this._run,500),this.compileJs=lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default()(this._compileJs,e),this.$nextTick(()=>{this.contentUnWatch=this.$watch("appData",()=>{this.run()},{deep:!0}),this.jsUnWatch=this.$watch(()=>this.js.trim(),()=>{this.compileJs()},{immediate:!0}),this.ready=!0})},destroyVM(){var e=this.playVM;if(e){var t;try{t=e.$parent,e.$destroy(),removeNode(e.$el),e.$el.innerHTML=""}catch(e){}try{t.$destroy()}catch(e){}}this.playVM=e=null,this.$refs.result.innerHTML=""},createVM(){var playground=this,js=this.compiledJs,html=this.html.trim();if(this.isOk=!1,null!==js){var options={};try{eval("var console = this.fakeConsole; ".concat(js))}catch(e){return this.errHandler(e,"javascript"),void window.console.error("Error in javascript",e)}if(html||"string"==typeof options.template||"function"==typeof options.render)if(html||"string"!=typeof options.template||"#"!==options.template.charAt(0))if(options.el)this.errHandler('Do not set "el" property',"javascript");else if(options.render&&"function"!=typeof options.render)this.errHandler("render must be a function","javascript");else{options.render?delete options.template:options.template='<div id="playground-app">'.concat(options.template||html,"</div>"),options.methods&&Object.keys(options.methods).forEach(e=>{var t=options.methods[e];"function"!=typeof t?this.errorHandler("TypeError: ".concat(e," is not a function"),"methods"):options.methods[e]=function(){try{return t.apply(this,arguments)}catch(t){playground.errHandler(t,'method "'.concat(e,'"'))}}});try{var holder=document.createElement("div");this.$refs.result.appendChild(holder),this.playVM=new vue__WEBPACK_IMPORTED_MODULE_8___default.a(_objectSpread(_objectSpread({},options),{},{el:holder,router:this.$router,parent:new vue__WEBPACK_IMPORTED_MODULE_8___default.a({errorCaptured:(e,t,r)=>(playground.errHandler(e,r),!1),template:"<span></span>"})}))}catch(e){return this.destroyVM(),void this.errHandler(e,"app create")}this.isOk=!0,this.saveToStorage()}else this.errHandler("Do not set template to an element ID","template");else this.errHandler("No template or render function provided","template")}},errHandler(e,t){this.log("danger","Error in ".concat(t,": ").concat(String(e))),this.destroyVM()},_compileJs(){if(this.$isServer)this.compiledJs=null;else{var e=(this.js||"").trim()||"{}";this.compiling=!0;var t=null;this.$nextTick(()=>{this.requestAF(()=>{try{t=this.compiler(";options = "+e+";")}catch(e){this.errHandler(e,"javascript"),window.console.error("Error in javascript",e),t=null}this.compiledJs=t,this.$nextTick(()=>{this.compiling=!1})})})}},_run(){this.$isServer||(this.building=!0,this.destroyVM(),this.clear(),this.requestAF(()=>{this.createVM(),this.$nextTick(()=>{this.building=!1})}))},toggleVertical(){this.vertical=!this.vertical},toggleFull(){this.full=!this.full},log(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];if(-1===String(r[0]).indexOf("Avoid mutating a prop directly")){var n=r.map(String).join(" ");this.messages.length&&-1!==n.indexOf("Error in render")&&n===this.messages[0][1]||(this.messages.length>10&&this.messages.splice(10),this.messages.unshift([e,n,this.logIdx++]))}},clear(){this.logIdx=1,this.messages.splice(0)},reset(){this.$bvModal.msgBoxConfirm("Are you sure that you want to reset to the playground to the default values?",{title:"Please Confirm Reset",size:"sm",buttonSize:"sm",okTitle:"YES",cancelTitle:"NO",titleTag:"h6",headerClass:"p-2",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then(e=>{e&&this.doReset()}).catch(e=>{console.log(e)})},doReset(){this.js=this.html="",this.$nextTick(()=>{this.js=DEFAULT_JS.trim(),this.html=DEFAULT_HTML.trim(),this.saveToStorage()})},clearStorage(){storage&&Object.keys(STORAGE_KEYS).forEach(e=>{storage.removeItem(e)})},loadFromStorage(){if(!storage)return this.js=DEFAULT_JS.trim(),void(this.html=DEFAULT_HTML.trim());var e=parseInt(storage.getItem(STORAGE_KEYS.timestamp),10)||0;Date.now()-e>STORAGE_MAX_RETENTION&&this.clearStorage(),this.html=storage.getItem(STORAGE_KEYS.html)||DEFAULT_HTML.trim(),this.js=storage.getItem(STORAGE_KEYS.js)||DEFAULT_JS.trim();var t=storage.getItem(STORAGE_KEYS.layout)||"horizontal";"full"===t?this.full=!0:"vertical"===t?(this.vertical=!0,this.full=!1):"horizontal"===t&&(this.vertical=!1,this.full=!1)},saveToStorage(){if(storage)try{storage.setItem(STORAGE_KEYS.html,this.html),storage.setItem(STORAGE_KEYS.js,this.js),storage.setItem(STORAGE_KEYS.layout,this.layout),storage.setItem(STORAGE_KEYS.timestamp,String(Date.now()))}catch(e){}},requestAF(e){var t="undefined"==typeof window?{}:window;return(t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||t.oRequestAnimationFrame||(e=>setTimeout(e,16)))(e)}}}},370:function(e,t,r){},383:function(e,t,r){"use strict";t.__esModule=!0;var o=r(384);t.getParameters=o.getParameters},384:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(385);t.getParameters=function(e){return input=JSON.stringify(e),o.compressToBase64(input).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");var input}},385:function(e,t,r){var o,n=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",o={};function n(e,t){if(!o[e]){o[e]={};for(var i=0;i<e.length;i++)o[e][e.charAt(i)]=i}return o[e][t]}var _={compressToBase64:function(input){if(null==input)return"";var e=_._compress(input,6,(function(a){return t.charAt(a)}));switch(e.length%4){default:case 0:return e;case 1:return e+"===";case 2:return e+"==";case 3:return e+"="}},decompressFromBase64:function(input){return null==input?"":""==input?null:_._decompress(input.length,32,(function(e){return n(t,input.charAt(e))}))},compressToUTF16:function(input){return null==input?"":_._compress(input,15,(function(a){return e(a+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:_._decompress(e.length,16384,(function(t){return e.charCodeAt(t)-32}))},compressToUint8Array:function(e){for(var t=_.compress(e),r=new Uint8Array(2*t.length),i=0,o=t.length;i<o;i++){var n=t.charCodeAt(i);r[2*i]=n>>>8,r[2*i+1]=n%256}return r},decompressFromUint8Array:function(t){if(null==t)return _.decompress(t);for(var r=new Array(t.length/2),i=0,o=r.length;i<o;i++)r[i]=256*t[2*i]+t[2*i+1];var n=[];return r.forEach((function(t){n.push(e(t))})),_.decompress(n.join(""))},compressToEncodedURIComponent:function(input){return null==input?"":_._compress(input,6,(function(a){return r.charAt(a)}))},decompressFromEncodedURIComponent:function(input){return null==input?"":""==input?null:(input=input.replace(/ /g,"+"),_._decompress(input.length,32,(function(e){return n(r,input.charAt(e))})))},compress:function(t){return _._compress(t,16,(function(a){return e(a)}))},_compress:function(e,t,r){if(null==e)return"";var i,o,n,_={},l={},c="",d="",h="",m=2,f=3,v=2,E=[],y=0,O=0;for(n=0;n<e.length;n+=1)if(c=e.charAt(n),Object.prototype.hasOwnProperty.call(_,c)||(_[c]=f++,l[c]=!0),d=h+c,Object.prototype.hasOwnProperty.call(_,d))h=d;else{if(Object.prototype.hasOwnProperty.call(l,h)){if(h.charCodeAt(0)<256){for(i=0;i<v;i++)y<<=1,O==t-1?(O=0,E.push(r(y)),y=0):O++;for(o=h.charCodeAt(0),i=0;i<8;i++)y=y<<1|1&o,O==t-1?(O=0,E.push(r(y)),y=0):O++,o>>=1}else{for(o=1,i=0;i<v;i++)y=y<<1|o,O==t-1?(O=0,E.push(r(y)),y=0):O++,o=0;for(o=h.charCodeAt(0),i=0;i<16;i++)y=y<<1|1&o,O==t-1?(O=0,E.push(r(y)),y=0):O++,o>>=1}0==--m&&(m=Math.pow(2,v),v++),delete l[h]}else for(o=_[h],i=0;i<v;i++)y=y<<1|1&o,O==t-1?(O=0,E.push(r(y)),y=0):O++,o>>=1;0==--m&&(m=Math.pow(2,v),v++),_[d]=f++,h=String(c)}if(""!==h){if(Object.prototype.hasOwnProperty.call(l,h)){if(h.charCodeAt(0)<256){for(i=0;i<v;i++)y<<=1,O==t-1?(O=0,E.push(r(y)),y=0):O++;for(o=h.charCodeAt(0),i=0;i<8;i++)y=y<<1|1&o,O==t-1?(O=0,E.push(r(y)),y=0):O++,o>>=1}else{for(o=1,i=0;i<v;i++)y=y<<1|o,O==t-1?(O=0,E.push(r(y)),y=0):O++,o=0;for(o=h.charCodeAt(0),i=0;i<16;i++)y=y<<1|1&o,O==t-1?(O=0,E.push(r(y)),y=0):O++,o>>=1}0==--m&&(m=Math.pow(2,v),v++),delete l[h]}else for(o=_[h],i=0;i<v;i++)y=y<<1|1&o,O==t-1?(O=0,E.push(r(y)),y=0):O++,o>>=1;0==--m&&(m=Math.pow(2,v),v++)}for(o=2,i=0;i<v;i++)y=y<<1|1&o,O==t-1?(O=0,E.push(r(y)),y=0):O++,o>>=1;for(;;){if(y<<=1,O==t-1){E.push(r(y));break}O++}return E.join("")},decompress:function(e){return null==e?"":""==e?null:_._decompress(e.length,32768,(function(t){return e.charCodeAt(t)}))},_decompress:function(t,r,o){var i,n,_,l,c,d,h,m=[],f=4,v=4,E=3,y="",O=[],data={val:o(0),position:r,index:1};for(i=0;i<3;i+=1)m[i]=i;for(_=0,c=Math.pow(2,2),d=1;d!=c;)l=data.val&data.position,data.position>>=1,0==data.position&&(data.position=r,data.val=o(data.index++)),_|=(l>0?1:0)*d,d<<=1;switch(_){case 0:for(_=0,c=Math.pow(2,8),d=1;d!=c;)l=data.val&data.position,data.position>>=1,0==data.position&&(data.position=r,data.val=o(data.index++)),_|=(l>0?1:0)*d,d<<=1;h=e(_);break;case 1:for(_=0,c=Math.pow(2,16),d=1;d!=c;)l=data.val&data.position,data.position>>=1,0==data.position&&(data.position=r,data.val=o(data.index++)),_|=(l>0?1:0)*d,d<<=1;h=e(_);break;case 2:return""}for(m[3]=h,n=h,O.push(h);;){if(data.index>t)return"";for(_=0,c=Math.pow(2,E),d=1;d!=c;)l=data.val&data.position,data.position>>=1,0==data.position&&(data.position=r,data.val=o(data.index++)),_|=(l>0?1:0)*d,d<<=1;switch(h=_){case 0:for(_=0,c=Math.pow(2,8),d=1;d!=c;)l=data.val&data.position,data.position>>=1,0==data.position&&(data.position=r,data.val=o(data.index++)),_|=(l>0?1:0)*d,d<<=1;m[v++]=e(_),h=v-1,f--;break;case 1:for(_=0,c=Math.pow(2,16),d=1;d!=c;)l=data.val&data.position,data.position>>=1,0==data.position&&(data.position=r,data.val=o(data.index++)),_|=(l>0?1:0)*d,d<<=1;m[v++]=e(_),h=v-1,f--;break;case 2:return O.join("")}if(0==f&&(f=Math.pow(2,E),E++),m[h])y=m[h];else{if(h!==v)return null;y=n+n.charAt(0)}O.push(y),m[v++]=n+y.charAt(0),n=y,0==--f&&(f=Math.pow(2,E),E++)}}};return _}();void 0===(o=function(){return n}.call(t,r,t,e))||(e.exports=o)},386:function(e,t,r){"use strict";r(37);t.a={name:"BVCodeMirror",props:{value:{type:String,default:""},mode:{type:[String,Object],default:""},theme:{type:String,default:"default"},tabMode:{type:String,default:"indent"},tabSize:{type:[Number,String],default:2},lineWrapping:{type:Boolean,default:!0},lineNumbers:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1}},data:()=>({CM:null}),computed:{componentData:()=>({staticClass:"notranslate m-0 p-0",style:{minHeight:"300px"},attrs:{translate:"no"}})},watch:{value(e,t){t&&""!==t||this.CM.setValue(e)}},mounted(){Promise.all([r.e(97),r.e(5)]).then(r.bind(null,425)).then(e=>{var t=e.default||e;this.CM=t.fromTextArea(this.$refs.input,{mode:this.mode,theme:this.theme,tabMode:this.tabMode,tabSize:parseInt(this.tabSize,10)||2,lineWrapping:this.lineWrapping,lineNumbers:this.lineNumbers,autoCloseTags:!0,autoCloseBrackets:!0,readOnly:this.readOnly}),this.CM.on("changes",()=>{this.$emit("input",this.CM.getValue())}),this.$nextTick(()=>{this.$nextTick(()=>{this.CM.setValue(this.value)})})})},beforeDestroy(){this.CM&&this.CM.toTextArea(),this.CM=null},render(e){return e("div",this.componentData,[e("textarea",{ref:"input",staticClass:"w-100 border-0",style:{minWidth:"100px"},props:{value:this.value}})])}}},387:function(e,t,r){"use strict";r(370)},524:function(e,t,r){"use strict";r.r(t);var o=r(367).a,n=(r(387),r(36)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"pb-5",attrs:{fluid:"",tag:"main"}},[r("div",{staticClass:"bd-content mb-4"},[r("h1",[r("span",{staticClass:"bd-content-title"},[e._v(e._s(e.title))])]),e._v(" "),r("b-row",{attrs:{"align-v":"center"}},[r("b-col",[r("p",{staticClass:"bd-lead"},[e._v("\n          Here you can interactively play and test components with a fresh Vue.js instance. Please\n          refer to the "),r("b-link",{attrs:{to:"/docs"}},[e._v("Docs")]),e._v(" section for more information about\n          available components and usage.\n        ")],1)]),e._v(" "),r("b-col",{attrs:{lg:"auto"}},[r("BVCarbonAd",{staticClass:"my-3 my-lg-1"})],1)],1)],1),e._v(" "),e.loading?r("b-row",[r("b-col",{staticClass:"mb-2 mb-md-0"},[r("b-alert",{staticClass:"text-center",attrs:{variant:"info",show:""}},[e._v("\n        Loading JavaScript compiler...\n      ")])],1)],1):e._e(),e._v(" "),e.ready&&e.needsTranspiler?r("b-container",[r("b-row",[r("b-col",[r("b-alert",{staticClass:"mb-3",attrs:{variant:"info",show:"",fade:"",dismissible:""}},[e._v("\n          Your browser does not support modern ES6 JavaScript syntax. However, the code in the\n          JavaScipt editor will be transpiled to work with your browser, except for any ES6 code\n          that is in the Template editor (i.e. destructuring, arrow functions, etc.)\n        ")])],1)],1)],1):e._e(),e._v(" "),r("b-row",[r("b-col",{staticClass:"mb-2 mb-md-0"},[r("b-btn",{attrs:{size:"sm",variant:"danger",disabled:e.isDefault||e.isBusy},on:{click:e.reset}},[e._v("\n        Reset to default\n      ")])],1),e._v(" "),r("b-col",{staticClass:"mt-2 mt-md-0",attrs:{md:"auto"}},[r("b",{staticClass:"d-block d-sm-inline-block mr-sm-2 mb-1 mb-sm-0"},[e._v("Export to")]),e._v(" "),r("b-form",{staticClass:"d-inline-block mr-1 notranslate",attrs:{translate:"no",method:"post",action:"https://codepen.io/pen/define",target:"_blank"}},[r("input",{attrs:{type:"hidden",name:"data"},domProps:{value:e.codepenData}}),e._v(" "),r("b-btn",{attrs:{size:"sm",type:"submit",disabled:!e.isOk||e.isBusy}},[e._v("CodePen")])],1),e._v(" "),r("b-form",{staticClass:"d-inline-block mr-1 notranslate",attrs:{translate:"no",method:"post",action:"https://codesandbox.io/api/v1/sandboxes/define",target:"_blank"}},[r("input",{attrs:{type:"hidden",name:"parameters"},domProps:{value:e.codesandboxData}}),e._v(" "),r("b-btn",{attrs:{size:"sm",type:"submit",disabled:!e.isOk||e.isBusy}},[e._v("CodeSandbox")])],1),e._v(" "),r("b-form",{staticClass:"d-inline-block notranslate",attrs:{translate:"no",method:"post",action:"https://jsfiddle.net/api/post/library/pure/",target:"_blank"}},[r("input",{attrs:{type:"hidden",name:"html"},domProps:{value:e.exportData.extendedHtml}}),e._v(" "),r("input",{attrs:{type:"hidden",name:"js"},domProps:{value:e.exportData.extendedJs}}),e._v(" "),r("input",{attrs:{type:"hidden",name:"resources"},domProps:{value:e.exportData.externalCss.concat([e.exportData.externalJs]).join(",")}}),e._v(" "),r("input",{attrs:{type:"hidden",name:"css"},domProps:{value:e.exportData.css}}),e._v(" "),r("input",{attrs:{type:"hidden",name:"js_wrap",value:"l"}}),e._v(" "),r("b-btn",{attrs:{size:"sm",type:"submit",disabled:!e.isOk||e.isBusy}},[e._v("JSFiddle")])],1)],1)],1),e._v(" "),r("transition-group",{staticClass:"row",attrs:{tag:"div",name:"flip"}},[r("b-col",{key:"A",attrs:{cols:e.full?12:null}},[r("transition-group",{staticClass:"row",attrs:{tag:"div",name:"flip"}},[r("b-col",{key:"A1",staticClass:"mt-3",attrs:{md:e.vertical&&!e.full?6:12,sm:"12"}},[r("b-card",{attrs:{"no-body":"","header-tag":"header"},scopedSlots:e._u([{key:"header",fn:function(){return[r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("h5",{staticClass:"mb-0"},[r("span",{staticClass:"notranslate",attrs:{translate:"no"}},[e._v("Template")])]),e._v(" "),r("b-btn",{staticClass:"d-none d-md-inline-block",attrs:{size:"sm",variant:"outline-info"},on:{click:e.toggleFull}},[r("span",[e._v(e._s(e.full?"Split":"Full"))])])],1)]},proxy:!0}])},[e._v(" "),r("BVCodeMirror",{attrs:{mode:"htmlmixed"},model:{value:e.html,callback:function(t){e.html=t},expression:"html"}})],1)],1),e._v(" "),r("b-col",{key:"A2",staticClass:"mt-3",attrs:{md:e.vertical&&!e.full?6:12,sm:"12"}},[r("b-card",{attrs:{"no-body":"","header-tag":"header"},scopedSlots:e._u([{key:"header",fn:function(){return[r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("h5",{staticClass:"mb-0"},[r("span",{staticClass:"notranslate",attrs:{translate:"no"}},[e._v("JavaScript")]),e._v(" "),e.compiling?r("small",{staticClass:"text-muted"},[e._v(" compiling")]):e._e()]),e._v(" "),r("b-btn",{staticClass:"d-none d-md-inline-block",attrs:{size:"sm",variant:"outline-info"},on:{click:e.toggleFull}},[r("span",[e._v(e._s(e.full?"Split":"Full"))])])],1)]},proxy:!0}])},[e._v(" "),r("BVCodeMirror",{attrs:{mode:"javascript"},model:{value:e.js,callback:function(t){e.js=t},expression:"js"}})],1)],1)],1)],1),e._v(" "),r("b-col",{key:"B",attrs:{md:e.vertical||e.full?12:6,sm:"12"}},[r("b-row",[r("b-col",{staticClass:"mt-3",attrs:{cols:"12"}},[r("b-card",{staticClass:"play-result",attrs:{"no-body":"","header-tag":"header"},scopedSlots:e._u([{key:"header",fn:function(){return[r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("h5",{staticClass:"mb-0"},[r("span",[e._v("Result")]),e._v(" "),e.compiling||e.building?r("small",{staticClass:"text-muted"},[e._v(" building")]):e._e()]),e._v(" "),e.full?e._e():r("b-btn",{staticClass:"d-none d-md-inline-block",attrs:{size:"sm",variant:"outline-info"},on:{click:e.toggleVertical}},[r("span",[e._v(e._s(e.vertical?"Horizontal":"Vertical"))])])],1)]},proxy:!0}])},[e._v(" "),r("b-card-body",{ref:"result",staticClass:"play-result-body notranslate",attrs:{translate:"no"}})],1)],1),e._v(" "),r("b-col",{staticClass:"mt-3 notranslate",attrs:{cols:"12",translate:"no"}},[r("b-card",{attrs:{"no-body":"","header-tag":"header"},scopedSlots:e._u([{key:"header",fn:function(){return[r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("h5",{staticClass:"mb-0"},[r("span",[e._v("Console log")])]),e._v(" "),r("b-btn",{attrs:{disabled:0===e.messages.length,size:"sm",variant:"outline-danger"},on:{click:e.clear}},[r("span",[e._v("Clear")])])],1)]},proxy:!0}])},[e._v(" "),r("transition-group",{staticClass:"list-group list-group-flush play-log",attrs:{tag:"ul",name:"flip-list"}},[e.messages.length?e._e():r("b-list-group-item",{key:"empty-console"},[e._v("\n                 \n              ")]),e._v(" "),e._l(e.messages,(function(t){return r("b-list-group-item",{key:"console-"+t[2],staticClass:"py-2 d-flex"},[r("b-badge",{staticClass:"mr-1",staticStyle:{"font-size":"90%"},attrs:{variant:t[0]}},[e._v("\n                  "+e._s("danger"===t[0]?"error":"warning"===t[0]?"warn":"log")+"\n                ")]),e._v(" "),r("span",{class:["text-"+t[0],"text-monospace","small","d-block"],staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(t[1]))])],1)}))],2)],1)],1)],1)],1)],1)],1)}),[],!1,null,"040f28d1",null);t.default=component.exports}}]);