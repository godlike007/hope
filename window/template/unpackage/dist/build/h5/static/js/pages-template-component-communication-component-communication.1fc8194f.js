(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-component-communication-component-communication"],{"0d14":function(e,t,n){"use strict";n.r(t);var a=n("5f91"),r=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=r.a},1161:function(e,t,n){"use strict";n.r(t);var a=n("200b"),r=n("43bc");for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);n("3028");var i=n("2877"),c=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,"4e84dd3c",null);t["default"]=c.exports},"11a2":function(e,t,n){"use strict";n.r(t);var a=n("20b4"),r=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=r.a},"200b":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"sender-container"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.send.apply(void 0,arguments)}}},[e._v("点击发送消息")])],1)},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},"20b4":function(e,t,n){"use strict";var a=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("e814")),u=a(n("eeb1")),i={methods:{send:function(){var e=(0,r.default)(1e4*Math.random());u.default.$emit("cc",{msg:"From event bus -> "+e})}}};t.default=i},"2a04":function(e,t,n){"use strict";var a=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("e814")),u={methods:{send:function(){var e=(0,r.default)(1e4*Math.random());uni.$emit("cc",{msg:"From uni.$emit -> "+e})}}};t.default=u},3028:function(e,t,n){"use strict";var a=n("b304"),r=n.n(a);r.a},"3b77":function(e,t,n){var a=n("f43f");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("e126b4bc",a,!0,{sourceMap:!1,shadowMode:!1})},"43bc":function(e,t,n){"use strict";n.r(t);var a=n("2a04"),r=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=r.a},"5b2e":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".sender-container[data-v-4e84dd3c]{padding:20px}",""])},"5f91":function(e,t,n){"use strict";var a=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("9dbb")),u=a(n("1161")),i=a(n("e499")),c={components:{reciver:r.default,sender:u.default,senderBus:i.default},data:function(){return{}},methods:{}};t.default=c},"6e05":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:"组件通讯示例"}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-btn-v"},[n("reciver"),n("sender"),n("sender-bus")],1)],1)],1)},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},7045:function(e,t,n){"use strict";var a=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("eeb1")),u={data:function(){return{msg:""}},created:function(){uni.$on("cc",this.recive),r.default.$on("cc",this.recive)},beforeDestroy:function(){uni.$off("cc",this.recive),r.default.$off("cc",this.recive)},methods:{recive:function(e){this.msg=e.msg}}};t.default=u},"71e7":function(e,t,n){var a=n("8edb");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("226a029d",a,!0,{sourceMap:!1,shadowMode:!1})},"8edb":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".reciver[data-v-6ac55f52]{padding:40px 0;text-align:center;line-height:40px}",""])},"9dbb":function(e,t,n){"use strict";n.r(t);var a=n("d98d"),r=n("beda");for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);n("b337");var i=n("2877"),c=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,"6ac55f52",null);t["default"]=c.exports},a59d:function(e,t,n){"use strict";var a=n("3b77"),r=n.n(a);r.a},b304:function(e,t,n){var a=n("5b2e");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("32b62771",a,!0,{sourceMap:!1,shadowMode:!1})},b337:function(e,t,n){"use strict";var a=n("71e7"),r=n.n(a);r.a},beda:function(e,t,n){"use strict";n.r(t);var a=n("7045"),r=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=r.a},d98d:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"reciver"},[e._v(e._s(""===e.msg?"等待发送":"收到消息：")+e._s(e.msg))])],1)},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},e499:function(e,t,n){"use strict";n.r(t);var a=n("f3d0"),r=n("11a2");for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);n("a59d");var i=n("2877"),c=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,"a24ae108",null);t["default"]=c.exports},e6a6:function(e,t,n){"use strict";n.r(t);var a=n("6e05"),r=n("0d14");for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);var i=n("2877"),c=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,"0b329a6a",null);t["default"]=c.exports},eeb1:function(e,t,n){"use strict";var a=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("e143")),u=new r.default;t.default=u},f3d0:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"sender-container"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.send.apply(void 0,arguments)}}},[e._v("自定义EventBus")])],1)},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},f43f:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".sender-container[data-v-a24ae108]{padding:20px}",""])}}]);