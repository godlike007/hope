(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-storage-storage"],{"20c8":function(t,n,a){var e=a("30bc");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("b42baa86",e,!0,{sourceMap:!1,shadowMode:!1})},"30bc":function(t,n,a){n=t.exports=a("2350")(!1),n.push([t.i,".btn-setstorage[data-v-1a689018]{background-color:#007aff;color:#fff}",""])},"5be2":function(t,n,a){"use strict";a.r(n);var e=a("6e5f"),i=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(n,t,function(){return e[t]})}(s);n["default"]=i.a},"6e5f":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{title:"get/set/clearStorage",key:"",data:""}},methods:{keyChange:function(t){this.key=t.target.value},dataChange:function(t){this.data=t.target.value},getStorage:function(){var t=this.key;this.data;0===t.length?uni.showModal({title:"读取数据失败",content:"key 不能为空",showCancel:!1}):uni.getStorage({key:t,success:function(t){uni.showModal({title:"读取数据成功",content:"data: '"+t.data+"'",showCancel:!1})},fail:function(){uni.showModal({title:"读取数据失败",content:"找不到 key 对应的数据",showCancel:!1})}})},setStorage:function(){var t=this.key,n=this.data;0===t.length?uni.showModal({title:"保存数据失败",content:"key 不能为空",showCancel:!1}):uni.setStorage({key:t,data:n,success:function(t){uni.showModal({title:"存储数据成功",content:" ",showCancel:!1})},fail:function(){uni.showModal({title:"储存数据失败!",showCancel:!1})}})},clearStorage:function(){uni.clearStorageSync(),this.key="",this.data="",uni.showModal({title:"清除数据成功",content:" ",showCancel:!1})}}};n.default=e},a4c8:function(t,n,a){"use strict";a.r(n);var e=a("d4aa"),i=a("5be2");for(var s in i)"default"!==s&&function(t){a.d(n,t,function(){return i[t]})}(s);a("fcc4");var l=a("2877"),u=Object(l["a"])(i["default"],e["a"],e["b"],!1,null,"1a689018",null);n["default"]=u.exports},d4aa:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("page-head",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"uni-common-mt"},[a("v-uni-view",{staticClass:"uni-list"},[a("v-uni-view",{staticClass:"uni-list-cell"},[a("v-uni-view",{staticClass:"uni-list-cell-left"},[a("v-uni-view",{staticClass:"uni-label"},[t._v("key")])],1),a("v-uni-view",{staticClass:"uni-list-cell-db"},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入key",name:"key",value:t.key},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.keyChange.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"uni-list-cell"},[a("v-uni-view",{staticClass:"uni-list-cell-left"},[a("v-uni-view",{staticClass:"uni-label"},[t._v("value")])],1),a("v-uni-view",{staticClass:"uni-list-cell-db"},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入value",name:"data",value:t.data},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.dataChange.apply(void 0,arguments)}}})],1)],1)],1),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{staticClass:"btn-setstorage",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setStorage.apply(void 0,arguments)}}},[t._v("存储数据")]),a("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getStorage.apply(void 0,arguments)}}},[t._v("读取数据")]),a("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clearStorage.apply(void 0,arguments)}}},[t._v("清理数据")])],1)],1)],1)],1)},i=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return i})},fcc4:function(t,n,a){"use strict";var e=a("20c8"),i=a.n(e);i.a}}]);