webpackJsonp([82],{1378:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"carrousel",data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"}},swiperSlides:["static/student-index-pictures/yindao1.png","static/student-index-pictures/yindao2.png","static/student-index-pictures/yindao3.png"]}},methods:{togo:function(t){t==this.swiperSlides.length-1&&this.$emit("hiden")}}}},1420:function(t,n,i){n=t.exports=i(1322)(!0),n.push([t.i,"#loop .pic[data-v-29c0d72b],#loop[data-v-29c0d72b]{height:100%;width:100%}","",{version:3,sources:["F:/016.项目管理/代码管理/vue-yxxt/src/pages/student/component/yindaoye.vue"],names:[],mappings:"AAKA,mDACE,YAAa,AACb,UAAY,CACb",file:"yindaoye.vue",sourcesContent:["\n#loop[data-v-29c0d72b] {\n  height: 100%;\n  width: 100%;\n}\n#loop .pic[data-v-29c0d72b] {\n  height: 100%;\n  width: 100%;\n}"],sourceRoot:""}])},1440:function(t,n,i){var e=i(1420);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(1323)("48694b06",e,!0,{})},1462:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("swiper",{attrs:{options:t.swiperOption,id:"loop"}},[t._l(t.swiperSlides,function(n,e){return i("swiper-slide",{key:e},[i("div",{staticClass:"pic",style:{backgroundImage:"url('"+n+"')",backgroundSize:"100% 100%"},on:{click:function(n){t.togo(e)}}})])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]}},487:function(t,n,i){function e(t){i(1440)}var o=i(4)(i(1378),i(1462),e,"data-v-29c0d72b",null);t.exports=o.exports}});
//# sourceMappingURL=82.465de39e78c6a936804c.js.map