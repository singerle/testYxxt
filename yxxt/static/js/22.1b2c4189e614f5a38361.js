webpackJsonp([22,44],{1325:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var a=e(36),i=e.n(a),o=e(90),A=e.n(o),r=e(1326),c=function(t,n){var a=A()({},n);return new i.a(function(n){e.i(r.a)({method:"post",url:window.REQUEST_URL+t,params:a}).then(function(t){n(t.data)})})}},1326:function(t,n,e){"use strict";var a=e(36),i=e.n(a),o=e(89),A=e.n(o),r=e(308),c=A.a.create({baseURL:e.i({NODE_ENV:"production"}).BASE_API,timeout:1e4});c.interceptors.request.use(function(t){return t.headers.token=r.a.getters.getuser.userid,t},function(t){i.a.reject(t)}),n.a=c},1334:function(t,n,e){"use strict";e.d(n,"c",function(){return i}),e.d(n,"f",function(){return o}),e.d(n,"d",function(){return A}),e.d(n,"b",function(){return r}),e.d(n,"e",function(){return c}),e.d(n,"a",function(){return d});var a=e(1325),i=function(t){return e.i(a.a)("studentManage/welcome",t)},o=function(t){return e.i(a.a)("studentManage/updateCondition",t)},A=function(t){return e.i(a.a)("studentManage/init",t)},r=function(t){return e.i(a.a)("studentManage/completeProcess",t)},c=function(t){return e.i(a.a)("studentManage/registration",t)},d=function(t){return e.i(a.a)("student/hclc",t)}},1342:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var a=e(1325),i=function(t){return e.i(a.a)("student/grsfm",t)}},1345:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(1342);n.default={name:"xcbdPopup",data:function(){return{isshow:!1,info:"",id:""}},methods:{cancle:function(){this.$emit("event",this.isshow)},getData:function(){var t=this;e.i(a.a)().then(function(n){"40001"==n.code&&(t.info=n.content)})}},created:function(){this.getData()}}},1348:function(t,n,e){n=t.exports=e(1322)(!0),n.push([t.i,'.wrap[data-v-873d9374]{position:fixed;width:100%;height:100%;background:rgba(0,0,0,.5);z-index:999}.wrap .content[data-v-873d9374]{position:fixed;top:0;bottom:0;width:100%}.wrap .content .top[data-v-873d9374]{width:100%;margin-bottom:1px;height:calc(100% - .46rem);background:#fff;overflow:hidden}.wrap .content .top div[data-v-873d9374],.wrap .content .top h3[data-v-873d9374],.wrap .content .top p[data-v-873d9374]{margin:0 auto;text-align:center}.wrap .content .top h3[data-v-873d9374]{font-size:.17rem;font-family:PingFang-SC-Bold;color:#333;line-height:.17rem;margin-top:.4rem;margin-bottom:.2rem}.wrap .content .top .code-1[data-v-873d9374]{width:2.13rem;height:1.1rem;background:url("/yxxt/static/student-index-pictures/long-code.png");margin-bottom:.1rem}.wrap .content .top .code-2[data-v-873d9374]{width:1.6rem;height:1.6rem;background:url("/yxxt/static/student-index-pictures/erwei-code.png");margin-bottom:.4rem}.wrap .content .bottom[data-v-873d9374]{width:100%;height:.45rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fff}.wrap .content .bottom p[data-v-873d9374]{font-size:.17rem;font-family:PingFang-SC-Medium;color:#333;line-height:.17rem}',"",{version:3,sources:["F:/016.项目管理/代码管理/vue-yxxt/src/pages/student/component/common/xcbdPopup.vue"],names:[],mappings:"AACA,uBACE,eAAgB,AAChB,WAAY,AACZ,YAAa,AACb,0BAA4B,AAC5B,WAAa,CACd,AACD,gCACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,qCACE,WAAY,AACZ,kBAAmB,AACnB,2BAA6B,AAC7B,gBAAiB,AACjB,eAAiB,CAClB,AACD,wHAGE,cAAe,AACf,iBAAmB,CACpB,AACD,wCACE,iBAAmB,AACnB,6BAA8B,AAC9B,WAAY,AACZ,mBAAqB,AACrB,iBAAmB,AACnB,mBAAsB,CACvB,AACD,6CACE,cAAe,AACf,cAAe,AACf,oEAAqE,AACrE,mBAAsB,CACvB,AACD,6CACE,aAAc,AACd,cAAe,AACf,qEAAsE,AACtE,mBAAsB,CACvB,AACD,wCACE,WAAY,AACZ,cAAgB,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,eAAiB,CAClB,AACD,0CACE,iBAAmB,AACnB,+BAAgC,AAChC,WAAY,AACZ,kBAAqB,CACtB",file:"xcbdPopup.vue",sourcesContent:['\n.wrap[data-v-873d9374] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0,0,0,0.5);\n  z-index: 999;\n}\n.wrap .content[data-v-873d9374] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n.wrap .content .top[data-v-873d9374] {\n  width: 100%;\n  margin-bottom: 1px;\n  height: calc(100% - 0.46rem);\n  background: #fff;\n  overflow: hidden;\n}\n.wrap .content .top h3[data-v-873d9374],\n.wrap .content .top div[data-v-873d9374],\n.wrap .content .top p[data-v-873d9374] {\n  margin: 0 auto;\n  text-align: center;\n}\n.wrap .content .top h3[data-v-873d9374] {\n  font-size: 0.17rem;\n  font-family: PingFang-SC-Bold;\n  color: #333;\n  line-height: 0.17rem;\n  margin-top: 0.4rem;\n  margin-bottom: 0.2rem;\n}\n.wrap .content .top .code-1[data-v-873d9374] {\n  width: 2.13rem;\n  height: 1.1rem;\n  background: url("/yxxt/static/student-index-pictures/long-code.png");\n  margin-bottom: 0.1rem;\n}\n.wrap .content .top .code-2[data-v-873d9374] {\n  width: 1.6rem;\n  height: 1.6rem;\n  background: url("/yxxt/static/student-index-pictures/erwei-code.png");\n  margin-bottom: 0.4rem;\n}\n.wrap .content .bottom[data-v-873d9374] {\n  width: 100%;\n  height: 0.45rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n}\n.wrap .content .bottom p[data-v-873d9374] {\n  font-size: 0.17rem;\n  font-family: PingFang-SC-Medium;\n  color: #333;\n  line-height: 0.17rem;\n}'],sourceRoot:""}])},1350:function(t,n,e){var a=e(1348);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(1323)("d0aebe28",a,!0,{})},1354:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrap"},[e("div",{staticClass:"content"},[e("div",{staticClass:"top"},[e("h3",[t._v("条形码")]),t._v(" "),e("div",{staticClass:"code-1",style:"null"==t.info.txm||null==t.info.txm?{background:""}:{background:"url("+t.info.txm+") no-repeat center center"}}),t._v(" "),e("h3",[t._v("二维码")]),t._v(" "),e("div",{staticClass:"code-2",style:"null"==t.info.ewm||null==t.info.ewm?{background:""}:{background:"url("+t.info.ewm+") no-repeat center center"}})]),t._v(" "),e("div",{staticClass:"bottom",on:{click:t.cancle}},[e("p",[t._v("取消")])])])])},staticRenderFns:[]}},1486:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(479),i=e.n(a),o=e(1334);n.default={name:"",components:{popup:i.a},data:function(){return{popupVisible:!1,showdiffent:"banli"}},methods:{handleCode:function(){this.popupVisible=!0,e.i(o.a)({pauId:this.$store.getters.getHjid})},cancleProup:function(t){this.popupVisible=t,t||(this.showdiffent="banlihou")},moni:function(){this.showdiffent="banli"}}}},1607:function(t,n,e){n=t.exports=e(1322)(!0),n.push([t.i,".xcbd .top[data-v-5a4c5c1a]{border-top:.01rem solid #ececec}.xcbd .top .pic[data-v-5a4c5c1a]{display:block;margin:.5rem auto 0;width:2.77rem;height:1.56rem;border-radius:.03rem}.xcbd .top .pic img[data-v-5a4c5c1a]{width:2.77rem;height:1.56rem}.xcbd .top p[data-v-5a4c5c1a]{text-indent:2em;width:3.6rem;margin:.2rem auto;font-size:.13rem;font-family:PingFang SC;color:#333;line-height:.23rem}.xcbd .top p[data-v-5a4c5c1a]:first-of-type{margin:.14rem atuo .04rem;font-family:PingFang-SC-Medium}.xcbd .bottom[data-v-5a4c5c1a]{border-top:.01rem solid #ececec;height:.66rem;width:100%;position:fixed;bottom:0}.xcbd .bottom .banli[data-v-5a4c5c1a],.xcbd .bottom[data-v-5a4c5c1a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.xcbd .bottom .banli[data-v-5a4c5c1a]{width:3.51rem;height:.46rem;-webkit-box-shadow:.01rem .01rem .02rem rgba(85,178,245,.5);box-shadow:.01rem .01rem .02rem rgba(85,178,245,.5);background:#3da8f5;border-radius:.06rem}.xcbd .bottom .banli p[data-v-5a4c5c1a]{font-size:.17rem;font-family:PingFang-SC-Medium;color:#fff}.xcbd .bottom .banlihou[data-v-5a4c5c1a]{width:3.51rem;height:.46rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fff}.xcbd .bottom .banlihou p[data-v-5a4c5c1a]{font-size:.17rem;font-family:PingFang-SC-Medium;color:#333}","",{version:3,sources:["F:/016.项目管理/代码管理/vue-yxxt/src/pages/student/component/bdlc/xcbd/bdlc-xcbd.vue"],names:[],mappings:"AACA,4BACE,+BAAkC,CACnC,AACD,iCACE,cAAe,AACf,oBAAsB,AACtB,cAAe,AACf,eAAgB,AAChB,oBAAuB,CACxB,AACD,qCACE,cAAe,AACf,cAAgB,CACjB,AACD,8BACE,gBAAiB,AACjB,aAAc,AACd,kBAAoB,AACpB,iBAAmB,AACnB,wBAAyB,AACzB,WAAY,AACZ,kBAAqB,CACtB,AACD,4CACE,0BAA6B,AAC7B,8BAAgC,CACjC,AACD,+BACE,gCAAkC,AAClC,cAAgB,AAChB,WAAY,AAUZ,eAAgB,AAChB,QAAU,CACX,AACD,qEAZE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAoB7B,AAhBD,sCACE,cAAe,AACf,cAAgB,AAUhB,4DAAiE,AACzD,oDAAyD,AACjE,mBAAoB,AACpB,oBAAuB,CACxB,AACD,wCACE,iBAAmB,AACnB,+BAAgC,AAChC,UAAY,CACb,AACD,yCACE,cAAe,AACf,cAAgB,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,eAAiB,CAClB,AACD,2CACE,iBAAmB,AACnB,+BAAgC,AAChC,UAAY,CACb",file:"bdlc-xcbd.vue",sourcesContent:["\n.xcbd .top[data-v-5a4c5c1a] {\n  border-top: 0.01rem solid #ececec;\n}\n.xcbd .top .pic[data-v-5a4c5c1a] {\n  display: block;\n  margin: 0.5rem auto 0;\n  width: 2.77rem;\n  height: 1.56rem;\n  border-radius: 0.03rem;\n}\n.xcbd .top .pic img[data-v-5a4c5c1a] {\n  width: 2.77rem;\n  height: 1.56rem;\n}\n.xcbd .top p[data-v-5a4c5c1a] {\n  text-indent: 2em;\n  width: 3.6rem;\n  margin: 0.2rem auto;\n  font-size: 0.13rem;\n  font-family: PingFang SC;\n  color: #333;\n  line-height: 0.23rem;\n}\n.xcbd .top p[data-v-5a4c5c1a]:nth-of-type(1) {\n  margin: 0.14rem atuo 0.04rem;\n  font-family: PingFang-SC-Medium;\n}\n.xcbd .bottom[data-v-5a4c5c1a] {\n  border-top: 0.01rem solid #ececec;\n  height: 0.66rem;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  bottom: 0;\n}\n.xcbd .bottom .banli[data-v-5a4c5c1a] {\n  width: 3.51rem;\n  height: 0.46rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-shadow: 0.01rem 0.01rem 0.02rem rgba(85,178,245,0.5);\n          box-shadow: 0.01rem 0.01rem 0.02rem rgba(85,178,245,0.5);\n  background: #3da8f5;\n  border-radius: 0.06rem;\n}\n.xcbd .bottom .banli p[data-v-5a4c5c1a] {\n  font-size: 0.17rem;\n  font-family: PingFang-SC-Medium;\n  color: #fff;\n}\n.xcbd .bottom .banlihou[data-v-5a4c5c1a] {\n  width: 3.51rem;\n  height: 0.46rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n}\n.xcbd .bottom .banlihou p[data-v-5a4c5c1a] {\n  font-size: 0.17rem;\n  font-family: PingFang-SC-Medium;\n  color: #333;\n}"],sourceRoot:""}])},1681:function(t,n,e){var a=e(1607);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(1323)("19efe4c1",a,!0,{})},1765:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"xcbd"},[e("popup",{directives:[{name:"show",rawName:"v-show",value:t.popupVisible,expression:"popupVisible"}],on:{event:t.cancleProup}}),t._v(" "),e("div",{staticClass:"top",on:{click:t.moni}},[t._m(0),t._v(" "),e("p",[t._v("学生本人凭录取通知书、居民身份证办理报到手续。")])]),t._v(" "),e("div",{staticClass:"bottom"},[e("div",{class:t.showdiffent,on:{click:t.handleCode}},[e("p",[t._v("出示身份码进行办理")])])])],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pic"},[e("img",{attrs:{src:"static/student-index-pictures/rxzb-lstd.png"}})])}]}},308:function(t,n,e){"use strict";var a=e(8),i=e(9);a.default.use(i.a);var o=new i.a.Store({state:{user:"",hjid:"",qsxx:"",wsxxPage1:"",wsxxPage2:"",wsxxPage3:"",getWsxxData:""},mutations:{SetUserInfo:function(t,n){t.user=n},saveTime:function(t,n){t.pickerValue=n},savewsxxPage1:function(t,n){t.wsxxPage1=n},savewsxxPage2:function(t,n){t.wsxxPage2=n},savehjid:function(t,n){t.hjid=n},saveqsxx:function(t,n){t.qsxx=n},saveWsxxDate:function(t,n){t.getWsxxData=n}},actions:{},getters:{getHjid:function(t){return t.hjid},getqsxx:function(t){return t.qsxx},getuser:function(t){return t.user}}});n.a=o},479:function(t,n,e){function a(t){e(1350)}var i=e(4)(e(1345),e(1354),a,"data-v-873d9374",null);t.exports=i.exports},513:function(t,n,e){function a(t){e(1681)}var i=e(4)(e(1486),e(1765),a,"data-v-5a4c5c1a",null);t.exports=i.exports}});
//# sourceMappingURL=22.1b2c4189e614f5a38361.js.map