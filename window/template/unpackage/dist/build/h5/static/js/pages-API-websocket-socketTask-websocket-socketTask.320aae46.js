(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-websocket-socketTask-websocket-socketTask"],{"636a":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:"websocket通讯示例"}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-view",{staticClass:"websocket-msg"},[t._v(t._s(t.showMsg))]),e("v-uni-input",{staticClass:"websocket-room",attrs:{type:"text",value:"",placeholder:"请输入一个房间号"},model:{value:t.roomId,callback:function(n){t.roomId="string"===typeof n?n.trim():n},expression:"roomId"}}),e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.connect.apply(void 0,arguments)}}},[t._v("连接websocket服务")]),e("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:t.connected,expression:"connected"}],attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.send.apply(void 0,arguments)}}},[t._v("发送一条消息")]),e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.close.apply(void 0,arguments)}}},[t._v("断开websocket服务")]),e("v-uni-view",{staticClass:"websocket-msg"},[t._v("同时运行两个hello uniapp填入相同的房间号进行测试")])],1)],1)],1)},s=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return s})},"9b47":function(t,n,e){"use strict";var o=e("d577"),s=e.n(o);s.a},d511:function(t,n,e){"use strict";e.r(n);var o=e("636a"),s=e("eb42");for(var i in s)"default"!==i&&function(t){e.d(n,t,function(){return s[t]})}(i);e("9b47");var c=e("2877"),a=Object(c["a"])(s["default"],o["a"],o["b"],!1,null,"6773ee51",null);n["default"]=a.exports},d577:function(t,n,e){var o=e("e3af");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var s=e("4f06").default;s("5a47fd05",o,!0,{sourceMap:!1,shadowMode:!1})},d6c5:function(t,n,e){"use strict";var o=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=o(e("e814"));e("6b54");var i=uni.getSystemInfoSync().platform,c={data:function(){return{connected:!1,connecting:!1,socketTask:!1,msg:!1,roomId:""}},computed:{showMsg:function(){return this.connected?this.msg?"收到消息："+this.msg:"等待接收消息":"尚未连接"}},onUnload:function(){this.socketTask&&this.socketTask.close&&this.socketTask.close()},methods:{connect:function(){var t=this;return""===this.roomId?(uni.showModal({content:"请输入一个房间号",showCancel:!1}),!1):this.connected||this.connecting?(uni.showModal({content:"正在连接或者已经连接，请勿重复连接",showCancel:!1}),!1):(this.connecting=!0,uni.showLoading({title:"连接中..."}),this.socketTask=uni.connectSocket({url:"wss://connect.websocket.in/hello_uni_app?room_id="+this.roomId,data:function(){return{msg:"Hello"}},success:function(t){},fail:function(t){}}),this.socketTask.onOpen(function(n){t.connecting=!1,t.connected=!0,uni.hideLoading(),uni.showToast({icon:"none",title:"连接成功"}),console.log("onOpen",n)}),this.socketTask.onError(function(n){t.connecting=!1,t.connected=!1,uni.hideLoading(),uni.showModal({content:"连接失败，可能是websocket服务不可用，请稍后再试",showCancel:!1}),console.log("onError",n)}),this.socketTask.onMessage(function(n){t.msg=n.data,console.log("onMessage",n)}),this.socketTask.onClose(function(n){t.connected=!1,t.startRecive=!1,t.socketTask=!1,t.msg=!1,console.log("onClose",n)}),void console.log("task",this.socketTask))},send:function(){this.socketTask.send({data:"from "+i+" : "+(0,s.default)(1e4*Math.random()).toString(),success:function(t){console.log(t)},fail:function(t){console.log(t)}})},close:function(){this.socketTask&&this.socketTask.close&&this.socketTask.close()}}};n.default=c},e3af:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".uni-padding-wrap[data-v-6773ee51]{width:%?690?%;padding:0 %?30?%}.uni-btn-v[data-v-6773ee51]{padding:%?10?% 0}.uni-btn-v uni-button[data-v-6773ee51]{margin:%?20?% 0}.websocket-room[data-v-6773ee51]{height:40px;line-height:40px;text-align:center;border-bottom:solid 1px #ddd;margin-bottom:20px}.websocket-msg[data-v-6773ee51]{padding:40px 0;text-align:center;font-size:14px;line-height:40px;color:#666}",""])},eb42:function(t,n,e){"use strict";e.r(n);var o=e("d6c5"),s=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=s.a}}]);