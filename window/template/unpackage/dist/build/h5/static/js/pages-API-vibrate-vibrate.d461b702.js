(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-vibrate-vibrate"],{"004b":function(t,n,i){var a=i("1272");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("2b78c8d0",a,!0,{sourceMap:!1,shadowMode:!1})},1272:function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,".uni-padding-wrap[data-v-7a084638]{margin-top:%?50?% 0}.uni-button[data-v-7a084638]{margin:%?30?% 0}.uni-tips[data-v-7a084638]{color:#666;font-size:%?30?%}.uni-tips-text[data-v-7a084638]{margin-top:%?15?%;line-height:1.2;font-size:%?24?%}",""])},"1b75":function(t,n,i){"use strict";var a=i("004b"),e=i.n(a);e.a},"690b":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"vibrateLong/vibrateShort"}},onLoad:function(){},methods:{longshock:function(){uni.vibrateLong({success:function(){console.log("success")}})},shortshock:function(){uni.vibrateShort({success:function(){console.log("success")}})}}};n.default=a},8293:function(t,n,i){"use strict";i.r(n);var a=i("8325"),e=i("e5b6");for(var u in e)"default"!==u&&function(t){i.d(n,t,function(){return e[t]})}(u);i("1b75");var o=i("2877"),s=Object(o["a"])(e["default"],a["a"],a["b"],!1,null,"7a084638",null);n["default"]=s.exports},8325:function(t,n,i){"use strict";var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.longshock.apply(void 0,arguments)}}},[t._v("长震动")]),i("v-uni-button",{staticClass:"uni-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.shortshock.apply(void 0,arguments)}}},[t._v("短震动")]),i("v-uni-view",{staticClass:"uni-tips"},[i("v-uni-view",[t._v("Tips")]),i("v-uni-view",{staticClass:"uni-tips-text"},[t._v("iOS上只有长震动，没有短震动")]),i("v-uni-view",{staticClass:"uni-tips-text"},[t._v("iOS上需要手机设置“打开响铃时震动”或“静音时震动”，否则无法震动")])],1)],1)],1)},e=[];i.d(n,"a",function(){return a}),i.d(n,"b",function(){return e})},e5b6:function(t,n,i){"use strict";i.r(n);var a=i("690b"),e=i.n(a);for(var u in a)"default"!==u&&function(t){i.d(n,t,function(){return a[t]})}(u);n["default"]=e.a}}]);