(window.webpackJsonp=window.webpackJsonp||[]).push([[21,36],{236:function(e,t,s){var i=s(242);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,s(166).default)("48117795",i,!0,{})},240:function(e,t,s){"use strict";var i={name:"ABackdrop",props:{isVisible:{type:Boolean,default:!0},zIndexOnShow:{type:Number,default:1080},transitionMs:{type:Number,default:150}},data:()=>({opacity:0,zIndex:null,top:null}),computed:{style(){const{top:e,zIndex:t,transitionMs:s,opacity:i}=this;return{top:e,transition:`opacity ${s}ms linear`,opacity:i,zIndex:t}}},methods:{hide(){this.$emit("update:is-visible",!1),this.$emit("hide")},lockBodyScroll(){document.body.style.maxWidth=`${document.body.offsetWidth}px`,document.body.style.overflow="hidden"}},watch:{isVisible(e){e?(this.opacity=null,this.lockBodyScroll()):(this.opacity=0,document.body.style.overflow=document.body.style.maxWidth=null)},opacity(e){0===e?setTimeout((()=>{this.top=this.zIndex=null}),this.transitionMs):(this.zIndex=this.zIndexOnShow,this.top=0)}},mounted(){this.isVisible&&(setTimeout((()=>{this.opacity=null}),this.transitionMs),this.lockBodyScroll())}},r=(s(241),s(51)),a=Object(r.a)(i,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"backdrop",style:e.style,on:{click:e.hide}})}),[],!1,null,null,null);t.a=a.exports},241:function(e,t,s){"use strict";s(236)},242:function(e,t,s){(t=s(165)(!0)).push([e.i,".backdrop{background-color:var(--dark);cursor:pointer;height:100vh;left:0;opacity:.65;position:fixed;top:-100vh;width:100vw;z-index:-100}","",{version:3,sources:["ABackdrop.scss"],names:[],mappings:"AAAA,UAAU,4BAA4B,CAAC,cAAc,CAAC,YAAY,CAAC,MAAM,CAAC,WAAW,CAAC,cAAc,CAAC,UAAU,CAAC,WAAW,CAAC,YAAY",file:"ABackdrop.scss",sourcesContent:[".backdrop{background-color:var(--dark);cursor:pointer;height:100vh;left:0;opacity:.65;position:fixed;top:-100vh;width:100vw;z-index:-100}"]}]),e.exports=t},243:function(e,t,s){"use strict";s(8),s(107),s(108),s(109);var i=s(29),r=s(38),a=s(49),n=s(61),o=s(250),c=s(240),l=s(184);const h=e=>{let{ecomSearch:t,term:s,page:i,defaultSort:r}=e;t.reset(),r&&t.setSortOrder(r),s&&t.setSearchTerm(s),i&&t.setPageNumber(i)};var d={name:"SearchEngine",components:{Portal:o.a,ABackdrop:c.a,ProductCard:l.a},props:{term:String,page:{type:Number,default:1},pageSize:{type:Number,default:24},brands:Array,categories:Array,isFixedBrands:Boolean,isFixedCategories:Boolean,defaultSort:String,defaultFilters:Object,autoFixScore:{type:Number,default:.6},isFilterable:{type:Boolean,default:!0},hasPopularItems:{type:Boolean,default:!0},canLoadMore:{type:Boolean,default:!0},loadMoreSelector:String,canRetry:{type:Boolean,default:!0},canShowItems:{type:Boolean,default:!0},productCardProps:Object,gridsData:{type:Array,default(){if("object"==typeof window&&window.storefront&&window.storefront.data)return window.storefront.data.grids}}},data:()=>({suggestedTerm:"",resultItems:[],totalSearchResults:0,hasSearched:!1,noResultsTerm:"",keepNoResultsTerm:!1,filters:[],lastSelectedFilter:null,selectedOptions:{},selectedSortOption:null,countOpenRequests:0,lastRequestId:null,isScheduled:!1,isLoadingMore:!1,hasNetworkError:!1,popularItems:[],hasSetPopularItems:!1,isAsideVisible:!1,searchFilterId:0}),computed:{i19clearFilters:()=>Object(r.a)(i.N),i19closeFilters:()=>Object(r.a)(i.P),i19didYouMean:()=>Object(r.a)(i.gb),i19filter:()=>Object(r.a)(i.yb),i19filterResults:()=>Object(r.a)(i.zb),i19itemsFound:()=>Object(r.a)(i.ac),i19noResultsFor:()=>Object(r.a)(i.yc),i19popularProducts:()=>Object(r.a)(i.Zc),i19refineSearch:()=>Object(r.a)(i.nd),i19relevance:()=>Object(r.a)(i.qd),i19results:()=>Object(r.a)(i.ud),i19searchAgain:()=>Object(r.a)(i.Ad),i19searchingFor:()=>Object(r.a)(i.Dd),i19searchOfflineErrorMsg:()=>Object(r.a)(i.Bd),i19sort:()=>Object(r.a)(i.Td),ecomSearch:()=>new n.a,isSearching(){return this.countOpenRequests>0},hasEmptyResult(){return this.hasSearched&&!this.resultItems.length},sortOptions:()=>[{value:null,label:Object(r.a)(i.qd)},{value:"sales",label:Object(r.a)(i.wd)},{value:"lowest_price",label:Object(r.a)(i.gc)},{value:"highest_price",label:Object(r.a)(i.Nb)},{value:"news",label:Object(r.a)(i.pd)},{value:"slug",label:Object(r.a)(i.qc)}],hasSelectedOptions(){for(const e in this.selectedOptions)if(this.selectedOptions[e]&&this.selectedOptions[e].length)return!0;return!1},isNavVisible(){return this.hasSearched&&this.isFilterable&&(this.isSearching||this.totalSearchResults>8||this.hasSelectedOptions)},isResultsVisible(){return this.hasSearched&&!this.isSearching||this.suggestedItems.length},hasFilters(){return this.hasSelectedOptions||this.filters.find((e=>{let{options:t}=e;return t.length}))},suggestedItems(){return this.resultItems.length?this.resultItems:this.popularItems},loadObserver(){return this.canLoadMore&&Object(a.a)("#search-engine-load-more",{load:()=>{this.isLoadingMore=!0,this.fetchItems()}})}},methods:{getCMSPropInfo:e=>window.apx_properties.find((t=>t.title.trim()==e.trim())),fetchItems(e,t){const s=t?new n.a:this.ecomSearch,i=Date.now();this.countOpenRequests++,this.lastRequestId=i,this.isLoadingMore&&s.setPageNumber(this.page+Math.ceil(this.resultItems.length/this.pageSize));const r=s.setPageSize(this.pageSize).fetch().then((e=>(this.lastRequestId===i&&(this.hasNetworkError=!1,t||this.handleSearchResult()),!t&&(this.term||this.brands||this.categories)||(this.hasSetPopularItems=!0,this.popularItems=s.getItems()),e))).catch((s=>{console.error(s),(this.lastRequestId===i||t)&&(!this.canRetry||e||s.response&&400===s.response.status?this.hasNetworkError=!0:this.fetchItems(!0,t))})).finally((()=>{this.countOpenRequests--,this.isLoadingMore=!1}));this.$emit("fetch",{ecomSearch:s,fetching:r}),setTimeout((()=>{window.imageResize()}),100)},updateFilters(){const e=[],t=(t,s,i)=>{let r=this.filters.findIndex((e=>e.filter===t));if(t!==this.lastSelectedFilter){if(-1===r&&(r=this.filters.length),this[`isFixed${t}`]){const e=this[t.toLowerCase()];e&&(s=s.filter((t=>{let{key:s}=t;return-1===e.indexOf(s)})))}this.filters[r]={filter:t,options:s,isSpec:i};const e=this.selectedOptions[t]?this.selectedOptions[t].filter((e=>s.find((t=>{let{key:s}=t;return s===e})))):[];this.$set(this.selectedOptions,t,e)}e.push(r)};this.ecomSearch.getSpecs().forEach(((e,s)=>{let{key:i,options:r}=e;t(i,r,!0)})),this.filters=this.filters.filter(((t,s)=>e.includes(s))),console.log("this.filters ",this.filters);let s="gender";this.filters.sort(((e,t)=>e.filter===s?-1:t.filter===s?1:0)),this.searchFilterId=Date.now()},handleSuggestions(){if(this.term){const{ecomSearch:e}=this,t=this.term.toLowerCase();let s=t,i=!1;this.suggestedTerm="",e.getTermSuggestions().forEach((e=>{let{options:r,text:a}=e;if(r.length){const e=r[0],n=e.text.toLowerCase();!this.totalSearchResults&&this.autoFixScore>0&&e.score>=this.autoFixScore&&-1===n.indexOf(t)&&(i=!0),s=s.replace(new RegExp(a,"i"),n)}})),this.keepNoResultsTerm?this.keepNoResultsTerm=!1:this.noResultsTerm="",s!==t&&(i?(this.noResultsTerm=t,this.keepNoResultsTerm=!0,this.$emit("update:term",s)):this.suggestedTerm=s,e.history.shift())}},handleSearchResult(){const{ecomSearch:e}=this;if(this.totalSearchResults=e.getTotalCount(),this.resultItems=this.isLoadingMore?this.resultItems.concat(e.getItems()):e.getItems(),this.updateFilters(),!this.hasSearched&&this.defaultFilters)for(const e in this.defaultFilters){const t=this.defaultFilters[e];Array.isArray(t)?t.forEach((t=>this.setFilterOption(e,t,!0))):"string"==typeof t&&this.setFilterOption(e,t,!0)}this.handleSuggestions(),this.totalSearchResults||!this.hasPopularItems||this.hasSetPopularItems||this.fetchItems(!1,!0),this.$emit(this.isLoadingMore?"load-more":"search",{ecomSearch:e}),this.hasSearched||this.$nextTick((()=>{setTimeout((()=>{this.hasSearched=!0}),100)}))},scheduleFetch(){this.isScheduled||(this.isScheduled=!0,this.$nextTick((()=>{setTimeout((()=>{this.fetchItems(),this.isScheduled=!1}),30)})))},resetAndFetch(){h(this),this.handlePresetedOptions(),this.scheduleFetch()},toggleFilters(e){this.isAsideVisible="boolean"==typeof e?e:!this.isAsideVisible},getFilterLabel(e){switch(e){case"Brands":return Object(r.a)(i.x);case"Categories":return Object(r.a)(i.H);default:if(this.gridsData){const t=this.gridsData.find((t=>t.grid_id===e));if(t)return t.title||t.grid_id}}return e},handlePresetedOptions(){["brands","categories"].forEach((e=>{if(this[e]&&this[e].length){const t=e.charAt(0).toUpperCase()+e.slice(1);this[`isFixed${t}`]||(this.selectedOptions[t]=this[e]),this.updateSearchFilter(t)}}))},updateSearchFilter(e){const{ecomSearch:t}=this;let s=this.selectedOptions[e];switch(void 0!==s&&s.length||(s=null),e){case"Brands":this.isFixedBrands&&this.brands&&(s=s?s.concat(this.brands):this.brands),t.setBrandNames(s);break;case"Categories":t.setCategoryNames(s),this.isFixedCategories&&this.categories&&t.mergeFilter({terms:{"categories.name":this.categories}});break;default:t.setSpec(e,s)}},setFilterOption(e,t,s){console.log(e,t,s);const{selectedOptions:i}=this,r=i[e];if(r){const i=r.indexOf(t);s?-1===i&&(this.lastSelectedFilter=e,r.push(t)):(i>-1&&r.splice(i,1),r.length||this.lastSelectedFilter!==e||(this.lastSelectedFilter=null)),this.updateSearchFilter(e),this.scheduleFetch()}},clearFilters(){const{selectedOptions:e}=this;for(const t in e)e[t]&&(e[t]=[],this.updateSearchFilter(t));this.fetchItems()},setSortOrder(e){this.selectedSortOption=e,this.ecomSearch.setSortOrder(e),this.page>1?this.page=1:this.scheduleFetch()},getFiltersFromURL(e){const t=new URLSearchParams(new URL(e).search).get("filters");if(!t)return console.warn('O parâmetro "filters" não foi encontrado na URL.'),null;{const e=t.replace(/'/g,'"');try{return JSON.parse(e)}catch(e){return console.error(e),null}}}},watch:{term(){this.resetAndFetch()},brands(){this.resetAndFetch()},categories(){this.resetAndFetch()},page(e){this.ecomSearch.setPageNumber(e),this.scheduleFetch()},isSearching(e){!e&&this.loadObserver&&this.$nextTick((()=>{this.loadObserver.observe()}))}},mounted(){this.fetchItems(),setTimeout((()=>{window.imageResize()}),100);const e=window.location.href,t=this.getFiltersFromURL(e);console.log("filtersURL",t),setTimeout((()=>{if(t)for(const e in t)if(console.log("Chave:",e),t.hasOwnProperty(e))for(const s of t[e])console.log("Text:",s.text),setTimeout((()=>{this.setFilterOption(e,s.text,!0)}),100)}),500)},created(){h(this),this.handlePresetedOptions(),this.fetchItems(),setTimeout((()=>{window.imageResize()}),100)}};t.a=d},250:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var i=s(30);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var a={selector:"vue-portal-target-".concat(((e=21)=>{let t="",s=e;for(;s--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64*Math.random()|0];return t})())},n="undefined"!=typeof window&&void 0!==("undefined"==typeof document?"undefined":r(document)),o=i.a.extend({abstract:!0,name:"PortalOutlet",props:["nodes","tag"],data:function(e){return{updatedNodes:e.nodes}},render:function(e){var t=this.updatedNodes&&this.updatedNodes();return t?1!==t.length||t[0].text?e(this.tag||"DIV",t):t:e()},destroyed:function(){var e=this.$el;e&&e.parentNode.removeChild(e)}}),c=i.a.extend({name:"VueSimplePortal",props:{disabled:{type:Boolean},prepend:{type:Boolean},selector:{type:String,default:function(){return"#".concat(a.selector)}},tag:{type:String,default:"DIV"}},render:function(e){if(this.disabled){var t=this.$scopedSlots&&this.$scopedSlots.default();return t?t.length<2&&!t[0].text?t:e(this.tag,t):e()}return e()},created:function(){this.getTargetEl()||this.insertTargetEl()},updated:function(){var e=this;this.$nextTick((function(){e.disabled||e.slotFn===e.$scopedSlots.default||(e.container.updatedNodes=e.$scopedSlots.default),e.slotFn=e.$scopedSlots.default}))},beforeDestroy:function(){this.unmount()},watch:{disabled:{immediate:!0,handler:function(e){e?this.unmount():this.$nextTick(this.mount)}}},methods:{getTargetEl:function(){if(n)return document.querySelector(this.selector)},insertTargetEl:function(){if(n){var e=document.querySelector("body"),t=document.createElement(this.tag);t.id=this.selector.substring(1),e.appendChild(t)}},mount:function(){if(n){var e=this.getTargetEl(),t=document.createElement("DIV");this.prepend&&e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),this.container=new o({el:t,parent:this,propsData:{tag:this.tag,nodes:this.$scopedSlots.default}})}},unmount:function(){this.container&&(this.container.$destroy(),delete this.container)}}});function l(e){var t,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.component(s.name||"portal",c),s.defaultSelector&&(t=s.defaultSelector,a.selector=t)}"undefined"!=typeof window&&window.Vue&&window.Vue===i.a&&i.a.use(l)},253:function(e,t,s){var i=s(265);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,s(166).default)("5055a041",i,!0,{})},263:function(e,t,s){"use strict";var i=s(270),r=s(243),a=(s(264),s(51)),n=Object(a.a)(r.a,i.a,i.b,!1,null,null,null);t.a=n.exports},264:function(e,t,s){"use strict";s(253)},265:function(e,t,s){(t=s(165)(!0)).push([e.i,'.search-engine{position:relative}.search-engine__nav{background:var(--light);color:var(--gray);margin-bottom:var(--spacer-3);padding:var(--spacer-2)}.search-engine__nav>div{align-items:center;display:flex;justify-content:space-between}.search-engine__toggles{display:flex}.search-engine__toggles button{color:var(--secondary);margin-left:var(--spacer-1)}.search-engine__count{position:relative}.search-engine__spinner{color:var(--secondary);height:1.75rem;margin-top:-.875rem;position:absolute;right:-3rem;top:50%;width:1.75rem}.search-engine__aside{border-radius:0;height:100%;max-width:100%;position:fixed;right:0;top:0;width:280px;z-index:1100}.search-engine__aside .card-body{overflow-y:auto}.search-engine__aside-open{border-bottom-right-radius:0;border-top-right-radius:0;bottom:50vh;position:fixed;right:0;text-align:right;z-index:890}.search-engine__aside-open .spinner-border{margin-bottom:3px}.search-engine__aside-open .i-search{opacity:.6}.search-engine__filter:not(:first-child){margin-top:var(--spacer-2)}.search-engine__filter:last-child{margin-bottom:var(--spacer-4)}.search-engine__filter button{color:var(--secondary);font-size:var(--font-size-lg);font-weight:var(--font-light);max-width:100%;padding-left:0}.search-engine__filter button i,.search-engine__filter button svg{color:var(--gray);font-size:var(--font-size);margin-right:var(--spacer-1);opacity:.5;transition:opacity .25s}.search-engine__filter button .i-chevron-up,.search-engine__filter button[aria-expanded=true] .i-chevron-down{display:none}.search-engine__filter button[aria-expanded=true] .i-chevron-up{display:inherit}.search-engine__filter button:hover i,.search-engine__filter button:hover svg{opacity:1}.search-engine__filter button:focus{box-shadow:none}.search-engine__option{color:var(--primary-light)}.search-engine__option small{color:var(--gray)}.search-engine__selected{margin-left:var(--spacer-2)}.search-engine__selected>small{color:var(--gray)}.search-engine__selected>small:before{content:" / "}.search-engine__info{padding-bottom:var(--spacer-3)}.search-engine__info button{margin-bottom:var(--spacer-2)}.search-engine__terms>span{font-weight:var(--font-light)}.search-engine__terms>span:not(:last-of-type){color:var(--text-muted)}.search-engine__retail{padding:var(--spacer-2) 0}.search-engine__item{margin-bottom:var(--spacer-3)}',"",{version:3,sources:["SearchEngine.scss"],names:[],mappings:"AAAA,eAAe,iBAAiB,CAAC,oBAAoB,uBAAuB,CAAC,iBAAiB,CAAC,6BAA6B,CAAC,uBAAuB,CAAC,wBAAwB,kBAAkB,CAAC,YAAY,CAAC,6BAA6B,CAAC,wBAAwB,YAAY,CAAC,+BAA+B,sBAAsB,CAAC,2BAA2B,CAAC,sBAAsB,iBAAiB,CAAC,wBAAwB,sBAAsB,CAAC,cAAc,CAAC,mBAAmB,CAAC,iBAAiB,CAAC,WAAW,CAAC,OAAO,CAAC,aAAa,CAAC,sBAAsB,eAAe,CAAC,WAAW,CAAC,cAAc,CAAC,cAAc,CAAC,OAAO,CAAC,KAAK,CAAC,WAAW,CAAC,YAAY,CAAC,iCAAiC,eAAe,CAAC,2BAA2B,4BAA4B,CAAC,yBAAyB,CAAC,WAAW,CAAC,cAAc,CAAC,OAAO,CAAC,gBAAgB,CAAC,WAAW,CAAC,2CAA2C,iBAAiB,CAAC,qCAAqC,UAAU,CAAC,yCAAyC,0BAA0B,CAAC,kCAAkC,6BAA6B,CAAC,8BAA8B,sBAAsB,CAAC,6BAA6B,CAAC,6BAA6B,CAAC,cAAc,CAAC,cAAc,CAAC,kEAAkE,iBAAiB,CAAC,0BAA0B,CAAC,4BAA4B,CAAC,UAAU,CAAC,uBAAuB,CAAC,8GAA8G,YAAY,CAAC,gEAAgE,eAAe,CAAC,8EAA8E,SAAS,CAAC,oCAAoC,eAAe,CAAC,uBAAuB,0BAA0B,CAAC,6BAA6B,iBAAiB,CAAC,yBAAyB,2BAA2B,CAAC,+BAA+B,iBAAiB,CAAC,sCAAsC,aAAa,CAAC,qBAAqB,8BAA8B,CAAC,4BAA4B,6BAA6B,CAAC,2BAA2B,6BAA6B,CAAC,8CAA8C,uBAAuB,CAAC,uBAAuB,yBAAyB,CAAC,qBAAqB,6BAA6B",file:"SearchEngine.scss",sourcesContent:['.search-engine{position:relative}.search-engine__nav{background:var(--light);color:var(--gray);margin-bottom:var(--spacer-3);padding:var(--spacer-2)}.search-engine__nav>div{align-items:center;display:flex;justify-content:space-between}.search-engine__toggles{display:flex}.search-engine__toggles button{color:var(--secondary);margin-left:var(--spacer-1)}.search-engine__count{position:relative}.search-engine__spinner{color:var(--secondary);height:1.75rem;margin-top:-.875rem;position:absolute;right:-3rem;top:50%;width:1.75rem}.search-engine__aside{border-radius:0;height:100%;max-width:100%;position:fixed;right:0;top:0;width:280px;z-index:1100}.search-engine__aside .card-body{overflow-y:auto}.search-engine__aside-open{border-bottom-right-radius:0;border-top-right-radius:0;bottom:50vh;position:fixed;right:0;text-align:right;z-index:890}.search-engine__aside-open .spinner-border{margin-bottom:3px}.search-engine__aside-open .i-search{opacity:.6}.search-engine__filter:not(:first-child){margin-top:var(--spacer-2)}.search-engine__filter:last-child{margin-bottom:var(--spacer-4)}.search-engine__filter button{color:var(--secondary);font-size:var(--font-size-lg);font-weight:var(--font-light);max-width:100%;padding-left:0}.search-engine__filter button i,.search-engine__filter button svg{color:var(--gray);font-size:var(--font-size);margin-right:var(--spacer-1);opacity:.5;transition:opacity .25s}.search-engine__filter button .i-chevron-up,.search-engine__filter button[aria-expanded=true] .i-chevron-down{display:none}.search-engine__filter button[aria-expanded=true] .i-chevron-up{display:inherit}.search-engine__filter button:hover i,.search-engine__filter button:hover svg{opacity:1}.search-engine__filter button:focus{box-shadow:none}.search-engine__option{color:var(--primary-light)}.search-engine__option small{color:var(--gray)}.search-engine__selected{margin-left:var(--spacer-2)}.search-engine__selected>small{color:var(--gray)}.search-engine__selected>small:before{content:" / "}.search-engine__info{padding-bottom:var(--spacer-3)}.search-engine__info button{margin-bottom:var(--spacer-2)}.search-engine__terms>span{font-weight:var(--font-light)}.search-engine__terms>span:not(:last-of-type){color:var(--text-muted)}.search-engine__retail{padding:var(--spacer-2) 0}.search-engine__item{margin-bottom:var(--spacer-3)}']}]),e.exports=t},270:function(e,t,s){"use strict";s.d(t,"a",(function(){return i})),s.d(t,"b",(function(){return r}));var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"search-engine"},[e.term?s("div",{staticClass:"row term-box-only"},[s("div",{staticClass:"col-12"},[e.term?[e.hasEmptyResult?s("div",{staticClass:"search-engine__no-results"},[s("div",{staticClass:"lead mb-2"},[e.suggestedTerm?s("span",[e._v(" "+e._s(e.i19didYouMean)+" "),s("a",{attrs:{href:"#"},domProps:{textContent:e._s(e.suggestedTerm)},on:{click:function(t){return t.preventDefault(),e.$emit("update:term",e.suggestedTerm)}}}),e._v(" ? ")]):e._e(),e._v(" "+e._s(e.i19noResultsFor)+" "),s("em",[e._v(e._s(e.term))])]),e.popularItems.length?s("h4",[e._v(" "+e._s(e.i19popularProducts)+" ")]):e._e()]):s("div",{staticClass:"search-engine__terms"},[e.noResultsTerm?s("span",{staticClass:"d-none d-lg-inline"},[e._v(" "+e._s(e.i19noResultsFor)+" "),s("s",[e._v(e._s(e.noResultsTerm))]),e._v(". ")]):e._e(),s("span",{staticClass:"d-none d-md-inline"},[e._v(" "+e._s(e.i19searchingFor)+": ")]),s("h1",[e._v(e._s(e.term))])])]:e._e()],2)]):e._e(),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp fast position-absolute"}},[s("div",{staticClass:"search-engine__nav"},[s("div",{staticClass:"container-fluid p-0"},[e._t("nav",(function(){return[s("div",{staticClass:"search-engine__count"},[s("strong",[e._v(e._s(e.totalSearchResults))]),e._v(" "+e._s(e.i19itemsFound)+" "),e.isSearching?s("div",{staticClass:"search-engine__spinner spinner-grow",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])]):e._e()]),e.isFilterable?s("div",{staticClass:"search-engine__toggles"},[e.hasFilters?s("button",{staticClass:"btn btn-light  d-flex d-md-none align-items-center mr-2",attrs:{type:"button"},on:{click:function(t){return e.toggleFilters(!0)}}},[s("span",{staticClass:"d-none d-md-inline"},[e._v(" "+e._s(e.i19filterResults)+" ")]),s("span",{staticClass:"d-md-none"},[e._v(" Filtrar ")]),s("i",{staticClass:"fas fa-filter ml-1"})]):e._e(),s("div",{staticClass:"dropdown d-flex"},[s("button",{staticClass:"btn btn-light",attrs:{type:"button",id:"search-engine-sort","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("span",{staticClass:"d-md-inline d-none"},[e._v("Ordenar por")]),s("span",{staticClass:"d-inline d-md-none"},[e._v("Ordenar")]),s("i",{staticClass:"fas fa-chevron-down ml-1"})]),s("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"search-engine-sort"}},e._l(e.sortOptions,(function(t,i){var r=t.value,a=t.label;return s("a",{key:"sort-"+i,staticClass:"dropdown-item",class:"search-engine__sort--"+r,attrs:{href:"#",active:e.selectedSortOption===r},on:{click:function(t){return t.preventDefault(),e.setSortOrder(r)}}},[e._v(" "+e._s(a)+" ")])})),0)])]):e._e()]}),null,{totalSearchResults:e.totalSearchResults,toggleFilters:e.toggleFilters})],2)])])],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2 col-12"},[s("aside",{staticClass:"search-engine__aside card shadow",class:e.isAsideVisible?"visible":""},[e._t("filters",(function(){return[s("header",{staticClass:"card-header d-md-none d-block"},[e._v(" "+e._s(e.i19refineSearch)+" "),s("button",{staticClass:"apx_close",attrs:{type:"button","aria-label":e.i19closeFilters},on:{click:e.toggleFilters}})]),s("div",{key:e.searchFilterId,staticClass:"card-body"},[s("div",{staticClass:"sticky"},e._l(e.filters.filter((function(e){return"polarizados"!=e.filter})),(function(t,i){var r=t.filter,a=t.options,n=t.isSpec;return!["Categories","Brands","largura_ponte","largura_lentes","comprimento_hastes","altura_lentes","largura_armacao","comprimento_da_haste","tamanho_da_lente","personalizavel","edicoes_especiais","receita","colecoes_especiais","novidades","tipo_de_lente"].includes(r)&&a.length?s("div",{key:"filters-"+r,staticClass:"search-engine__filter",class:"search-engine__filter--"+r},[e._o([s("button",{staticClass:"btn",class:i>3?"collapsed":null,attrs:{type:"button","data-toggle":"collapse","data-target":"#collapse-"+r,"aria-expanded":i<3?"true":"false","aria-controls":"collapse-"+r}},[e._v(" "+e._s(e.getFilterLabel(r))+" "),s("i",{staticClass:"toggleStatus"})]),s("div",{staticClass:"collapse",class:i<3||e.selectedOptions[r].length>0?"show":null,attrs:{id:"collapse-"+r}},e._l(a,(function(t,i){return s("div",{key:r+"-"+i,staticClass:"search-engine__option custom-control custom-checkbox",attrs:{"data-value":t.key}},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:r+"-"+i},domProps:{checked:e.selectedOptions[r].indexOf(t.key)>-1},on:{change:function(s){return e.setFilterOption(r,t.key,s.target.checked)}}}),s("label",{staticClass:"custom-control-label",attrs:{"data-grid":r,"data-option":t.key,for:r+"-"+i}},[s("div",{staticClass:"d-flex align-items-center flex-wrap"},[e.getCMSPropInfo(t.key)&&e.getCMSPropInfo(t.key).img?s("span",{staticClass:"cms_ico d-flex align-items-center"},[s("img",{attrs:{src:e.getCMSPropInfo(t.key).img}})]):e.getCMSPropInfo(t.key)&&(e.getCMSPropInfo(t.key).color_1||e.getCMSPropInfo(t.key).color_2||e.getCMSPropInfo(t.key).color_3)?s("span",{staticClass:"cms_ico colors d-flex align-items-center"},[e.getCMSPropInfo(t.key).color_1?s("span",{style:"background-color:"+e.getCMSPropInfo(t.key).color_1}):e._e(),e.getCMSPropInfo(t.key).color_2?s("span",{style:"background-color:"+e.getCMSPropInfo(t.key).color_2}):e._e(),e.getCMSPropInfo(t.key).color_3?s("span",{style:"background-color:"+e.getCMSPropInfo(t.key).color_3}):e._e()]):e._e(),e._v(" "+e._s(t.key)+" "),n?e._e():s("small",{staticClass:"d-none"},[e._v(" ("+e._s(t.doc_count)+") ")]),e.getCMSPropInfo(t.key)&&e.getCMSPropInfo(t.key).description?s("p",{staticClass:"cms_description m-0"},[e._v(" "+e._s(e.getCMSPropInfo(t.key).description)+" ")]):e._e()])])])})),0)],0,"filters-"+r)],2):e._e()})),0)]),e.hasSelectedOptions&&e.isFilterable?s("footer",{staticClass:"card-footer"},[s("button",{staticClass:"btn btn-sm btn-block btn-outline-secondary",attrs:{type:"button"},on:{click:e.clearFilters}},[e._v(" Apagar Filtros ")])]):e._e()]}))],2),s("span",{attrs:{id:"custom-backdrop"}})]),s("div",{staticClass:"col-md-10 col-12"},[s("transition",{attrs:{"enter-active-class":"animated fadeInRight slower","leave-active-class":"animated fadeOutRight"}},[(e.isNavVisible&&e.hasFilters,e._e())]),s("transition",{attrs:{"enter-active-class":"animated fadeIn slower"}},[e.isResultsVisible?s("div",{staticClass:"search-engine__results fade",style:{opacity:e.isSearching&&!e.isLoadingMore?.4:1}},[s("div",{staticClass:"container-fluid"},[e._e(),e.canShowItems?s("article",{staticClass:"search-engine__retail"},[s("div",{staticClass:"row"},e._l(e.suggestedItems,(function(t){return s("div",{key:t._id,staticClass:"col-6 col-md-4 px-1"},[s("article",{staticClass:"product-item"},[e._t("product-card",(function(){return[s("product-card",e._b({staticClass:"search-engine__item",attrs:{product:t}},"product-card",e.productCardProps,!1))]}),null,{product:t})],2)])})),0)]):e._e(),s("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[e.hasNetworkError?s("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[s("i",{staticClass:"fas fa-wifi mr-2"}),e._v(" "+e._s(e.i19searchOfflineErrorMsg)+" "),s("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.fetchItems.apply(null,arguments)}}},[e._v(" "+e._s(e.i19searchAgain)+" ")])]):e._e()])],1)]):e._e()]),s("transition",{attrs:{"leave-active-class":"animated fadeOut"}},[!e.hasSearched||e.isLoadingMore?e._t("default"):e._e()],2),s(e.loadMoreSelector?"portal":"div",{tag:"component",attrs:{selector:e.loadMoreSelector}},[e.resultItems.length<e.totalSearchResults?s("div",{key:e.lastRequestId,staticStyle:{width:"100%","margin-top":"20px",height:"5px"},attrs:{id:"search-engine-load-more"}}):e._e()])],1)])])},r=[]},321:function(e,t,s){var i=s(402);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,s(166).default)("53800e71",i,!0,{})},401:function(e,t,s){"use strict";s(321)},402:function(e,t,s){(t=s(165)(!0)).push([e.i,".search__box{border-radius:0;left:0;max-height:100vh;position:fixed;top:0;width:100vw;z-index:1090}@media(min-width:576px){.search__box{border-radius:var(--border-radius);margin-left:5vw;margin-top:5vh;max-height:90vh;width:90vw}}@media(min-width:992px){.search__box{margin-left:10vw;width:80vw}}.search__header{align-items:center;display:flex;position:relative}.search__status .close{transition:opacity .2s}.search__status .close:not(:only-child){opacity:0}.search__spinner{height:2rem;margin-top:-1rem;position:absolute;right:1rem;top:50%;width:2rem}.search__input-group{padding-right:var(--spacer-3);position:relative;width:100%}.search__input{padding-right:var(--spacer-5)}.search__submit{background:none;border:none;color:var(--secondary-lighter);font-size:1.5rem;line-height:1;margin-top:-1.25rem;padding:.5rem;position:absolute;right:var(--spacer-4);top:50%;transition:color .15s}.search__submit i,.search__submit svg{vertical-align:top}.search__submit:hover{color:var(--primary-light)}.search__body{min-height:7rem;overflow-x:hidden;overflow-y:auto;padding-left:0;padding-right:0}@media(min-width:576px){.search__body{padding-left:var(--spacer-2);padding-right:var(--spacer-2)}}@media(min-width:992px){.search__body{min-height:10rem}}.search__loading{display:block;height:3rem;margin:var(--spacer-5);width:3rem}.search__footer{align-items:center;display:flex;justify-content:space-between}.search__count{color:var(--text-muted);line-height:var(--line-height-lg);min-width:250px}.search__history{color:var(--text-muted);font-size:var(--font-size-lg);font-weight:var(--font-light);overflow-x:auto;white-space:nowrap}.search__history-link{margin-left:var(--spacer-2)}","",{version:3,sources:["InstantSearch.scss"],names:[],mappings:"AAAA,aAAa,eAAe,CAAC,MAAM,CAAC,gBAAgB,CAAC,cAAc,CAAC,KAAK,CAAC,WAAW,CAAC,YAAY,CAAC,wBAAwB,aAAa,kCAAkC,CAAC,eAAe,CAAC,cAAc,CAAC,eAAe,CAAC,UAAU,CAAC,CAAC,wBAAwB,aAAa,gBAAgB,CAAC,UAAU,CAAC,CAAC,gBAAgB,kBAAkB,CAAC,YAAY,CAAC,iBAAiB,CAAC,uBAAuB,sBAAsB,CAAC,wCAAwC,SAAS,CAAC,iBAAiB,WAAW,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,UAAU,CAAC,OAAO,CAAC,UAAU,CAAC,qBAAqB,6BAA6B,CAAC,iBAAiB,CAAC,UAAU,CAAC,eAAe,6BAA6B,CAAC,gBAAgB,eAAe,CAAC,WAAW,CAAC,8BAA8B,CAAC,gBAAgB,CAAC,aAAa,CAAC,mBAAmB,CAAC,aAAa,CAAC,iBAAiB,CAAC,qBAAqB,CAAC,OAAO,CAAC,qBAAqB,CAAC,sCAAsC,kBAAkB,CAAC,sBAAsB,0BAA0B,CAAC,cAAc,eAAe,CAAC,iBAAiB,CAAC,eAAe,CAAC,cAAc,CAAC,eAAe,CAAC,wBAAwB,cAAc,4BAA4B,CAAC,6BAA6B,CAAC,CAAC,wBAAwB,cAAc,gBAAgB,CAAC,CAAC,iBAAiB,aAAa,CAAC,WAAW,CAAC,sBAAsB,CAAC,UAAU,CAAC,gBAAgB,kBAAkB,CAAC,YAAY,CAAC,6BAA6B,CAAC,eAAe,uBAAuB,CAAC,iCAAiC,CAAC,eAAe,CAAC,iBAAiB,uBAAuB,CAAC,6BAA6B,CAAC,6BAA6B,CAAC,eAAe,CAAC,kBAAkB,CAAC,sBAAsB,2BAA2B",file:"InstantSearch.scss",sourcesContent:[".search__box{border-radius:0;left:0;max-height:100vh;position:fixed;top:0;width:100vw;z-index:1090}@media(min-width:576px){.search__box{border-radius:var(--border-radius);margin-left:5vw;margin-top:5vh;max-height:90vh;width:90vw}}@media(min-width:992px){.search__box{margin-left:10vw;width:80vw}}.search__header{align-items:center;display:flex;position:relative}.search__status .close{transition:opacity .2s}.search__status .close:not(:only-child){opacity:0}.search__spinner{height:2rem;margin-top:-1rem;position:absolute;right:1rem;top:50%;width:2rem}.search__input-group{padding-right:var(--spacer-3);position:relative;width:100%}.search__input{padding-right:var(--spacer-5)}.search__submit{background:none;border:none;color:var(--secondary-lighter);font-size:1.5rem;line-height:1;margin-top:-1.25rem;padding:.5rem;position:absolute;right:var(--spacer-4);top:50%;transition:color .15s}.search__submit i,.search__submit svg{vertical-align:top}.search__submit:hover{color:var(--primary-light)}.search__body{min-height:7rem;overflow-x:hidden;overflow-y:auto;padding-left:0;padding-right:0}@media(min-width:576px){.search__body{padding-left:var(--spacer-2);padding-right:var(--spacer-2)}}@media(min-width:992px){.search__body{min-height:10rem}}.search__loading{display:block;height:3rem;margin:var(--spacer-5);width:3rem}.search__footer{align-items:center;display:flex;justify-content:space-between}.search__count{color:var(--text-muted);line-height:var(--line-height-lg);min-width:250px}.search__history{color:var(--text-muted);font-size:var(--font-size-lg);font-weight:var(--font-light);overflow-x:auto;white-space:nowrap}.search__history-link{margin-left:var(--spacer-2)}"]}]),e.exports=t},501:function(e,t,s){"use strict";s.r(t);var i=s(30),r=s(29),a=s(38),n=s(240),o=s(263),c={name:"InstantSearch",components:{ABackdrop:n.a,SearchEngine:o.a},props:{term:{type:String,default:""},isVisible:{type:Boolean,default:!0},pageSize:{type:Number,default:6},autoFixScore:{type:Number,default:.83},isPopup:{type:Boolean,default:!0},searchEngineProps:Object,productCardProps:{type:Object,default:()=>({isSmall:!1})}},data(){return{localTerm:this.term,searchTriggerTimer:null,searchTerm:"",history:[],totalSearchResults:0,isSearching:!1,hasSearched:!1,isVisible_:!1}},computed:{i19close:()=>Object(a.a)(r.O),i19items:()=>Object(a.a)(r.Zb),i19search:()=>Object(a.a)(r.zd),i19searchProducts:()=>Object(a.a)(r.Cd),i19seeAll:()=>Object(a.a)(r.Fd)},methods:{hide(){this.$emit("update:is-visible",!1)},show(){this.$emit("update:is-visible",!0),setTimeout((()=>{window.imageResize()}),100)},setSearchTerm(e){const t=this.$el.parentElement;if(t&&"FORM"===t.tagName){const s=t.elements;for(let t=0;t<s.length;t++)if("term"===s[t].name){s[t].value=e;break}t.submit()}else this.localTerm=e},handleFetching(e){let{fetching:t}=e;this.isSearching=!0,t.finally((()=>{this.isSearching=!1}))},handleSearch(e){let{ecomSearch:t}=e;this.totalSearchResults=t.getTotalCount(),this.history=t.history.filter((e=>e.length>2&&-1===this.localTerm.indexOf(e))).slice(0,6),this.hasSearched||(this.hasSearched=!0,this.$nextTick((()=>{this.$refs.input&&this.$refs.input.focus()})))}},mounted(){$(".apx_search-trigger").click((()=>{this.show()}))},watch:{isVisible:{handler(e){e&&this.$nextTick((()=>{this.$refs.input&&this.$refs.input.focus()}))},immediate:!0},localTerm:{handler(e){const t=e.length>2?e:"";t!==this.searchTerm&&(clearTimeout(this.searchTriggerTimer),this.searchTriggerTimer=setTimeout((()=>{this.searchTerm=t}),400)),this.$emit("update:term",e)},immediate:!0}}},l=(s(401),s(51)),h=Object(l.a)(c,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search"},[s("a-backdrop",{attrs:{"is-visible":e.isVisible},on:{hide:e.hide}}),s("transition",{attrs:{"enter-active-class":"animated fadeInDown slow","leave-active-class":"animated fadeOutUp slow"}},[e.isVisible||e.hasSearched?s("div",{directives:[{name:"show",rawName:"v-show",value:e.isVisible,expression:"isVisible"}],staticClass:"search__box card"},[e._t("header",(function(){return[s("div",{staticClass:"px-4 mx-2 py-4"},[s("div",[s("div",{staticClass:"search__title "},[e._v("Pesquisar")]),s("header",{staticClass:"search__header card-header"},[s("div",{staticClass:"search__input-group"},[s("div",{staticClass:"d-flex align-items-center justify-content-between"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.localTerm,expression:"localTerm"}],ref:"input",staticClass:"search__input form-control form-control-lg",attrs:{type:"text",autocomplete:"off",placeholder:e.i19searchProducts},domProps:{value:e.localTerm},on:{input:function(t){t.target.composing||(e.localTerm=t.target.value)}}}),s("button",{staticClass:"search__submit ml-md-4",attrs:{type:"submit","aria-label":e.i19search}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("line",{attrs:{x1:"5.5",y1:"11.5",x2:"18.5",y2:"11.5",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"}}),s("path",{attrs:{d:"M12 5L19 12L12 19",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"}})])])])]),s("div",{staticClass:"search__status"},[e.isSearching?s("div",{staticClass:"search__spinner spinner-grow",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])]):e._e()])])])])]}),null,{isSearching:e.isSearching}),s("article",{staticClass:"search__body card-body"},[e._t("search-engine",(function(){return[s("SearchEngine",e._b({attrs:{term:e.searchTerm,"is-filterable":!1,"product-card-props":e.productCardProps},on:{"update:term":function(t){e.searchTerm=t},fetch:e.handleFetching,search:e.handleSearch}},"SearchEngine",Object.assign({},e.searchEngineProps,{pageSize:e.pageSize,autoFixScore:e.autoFixScore,isPopup:e.isPopup}),!1),[s("div",{staticClass:"search__loading spinner-border",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])])])]}),null,{term:e.searchTerm})],2),s("footer",{staticClass:"search__footer card-footer"},[e._t("history",(function(){return[s("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[e.history.length?s("div",{staticClass:"search__history d-none d-lg-block"},[s("div",{staticClass:"mb-3"},[s("b",[e._v("Histórico de pesquisa")])]),s("span",{staticClass:"svg-ico"},[s("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"9",cy:"9",r:"8",stroke:"#666666","stroke-linecap":"round","stroke-linejoin":"round"}}),s("path",{attrs:{d:"M9 4.2V9L12.2 10.6",stroke:"#666666","stroke-linecap":"round","stroke-linejoin":"round"}})])]),e._l(e.history,(function(t){return s("a",{staticClass:"search__history-link",attrs:{href:"#"},domProps:{textContent:e._s(t)},on:{click:function(s){return s.preventDefault(),e.setSearchTerm(t)}}})}))],2):s("div",{staticClass:"search__history d-none d-lg-block"},[s("div",{staticClass:"mb-3"},[s("b",[e._v("Histórico de pesquisa")])]),s("span",{staticClass:"svg-ico"},[s("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"9",cy:"9",r:"8",stroke:"#666666","stroke-linecap":"round","stroke-linejoin":"round"}}),s("path",{attrs:{d:"M9 4.2V9L12.2 10.6",stroke:"#666666","stroke-linecap":"round","stroke-linejoin":"round"}})])]),s("span",{staticClass:"ml-2"},[e._v(" Nenhuma pesquisa efetuada ")])])])]}),null,{history:e.history})],2)],2):e._e()])],1)}),[],!1,null,null,null).exports;t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"instant-search",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"search-input";const r=document.getElementById(t),a=document.getElementById(s);if(r&&a){const s=window.storefront&&window.storefront.getScopedSlots;new i.a({data:{isVisible:!1,term:""},created(){a.addEventListener("focusin",(()=>{this.isVisible=!0,this.term=a.value}))},render(i){const n=this;return i(h,{attrs:{id:t},props:{...e.props,term:n.term,isVisible:n.isVisible},on:{"update:is-visible"(e){n.isVisible=e},"update:term"(e){a.value=e}},scopedSlots:"function"==typeof s?s(r,i):void 0})}}).$mount(r)}}}}]);