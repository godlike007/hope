(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-websocket-global-websocket-global"],{"0676":function(n,t,o){var e=o("f5df");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=o("4f06").default;i("424270e2",e,!0,{sourceMap:!1,shadowMode:!1})},"0881":function(n,t,o){"use strict";var e=o("0676"),i=o.n(e);i.a},"8e02":function(n,t,o){"use strict";var e=o("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e(o("e814"));o("6b54");var c=uni.getSystemInfoSync().platform,a={data:function(){return{connected:!1,connecting:!1,msg:!1,roomId:""}},computed:{showMsg:function(){return this.connected?this.msg?"收到消息："+this.msg:"等待接收消息":"尚未连接"}},onUnload:function(){uni.closeSocket()},methods:{connect:function(){var n=this;return""===this.roomId?(uni.showModal({content:"请输入一个房间号",showCancel:!1}),!1):this.connected||this.connecting?(uni.showModal({content:"正在连接或者已经连接，请勿重复连接",showCancel:!1}),!1):(this.connecting=!0,uni.showLoading({title:"连接中..."}),uni.connectSocket({url:"wss://connect.websocket.in/hello_uni_app?room_id="+this.roomId,data:function(){return{msg:"Hello"}},success:function(n){},fail:function(n){}}),uni.onSocketOpen(function(t){n.connecting=!1,n.connected=!0,uni.hideLoading(),uni.showToast({icon:"none",title:"连接成功"}),console.log("onOpen",t)}),uni.onSocketError(function(t){n.connecting=!1,n.connected=!1,uni.hideLoading(),uni.showModal({content:"连接失败，可能是websocket服务不可用，请稍后再试",showCancel:!1}),console.log("onError",t)}),uni.onSocketMessage(function(t){n.msg=t.data,console.log("onMessage",t)}),void uni.onSocketClose(function(t){n.connected=!1,n.startRecive=!1,n.msg=!1,console.log("onClose",t)}))},send:function(){uni.sendSocketMessage({data:"from "+c+" : "+(0,i.default)(1e4*Math.random()).toString(),success:function(n){console.log(n)},fail:function(n){console.log(n)}})},close:function(){uni.closeSocket()}}};t.default=a},abb4:function(n,t,o){"use strict";o.r(t);var e=o("8e02"),i=o.n(e);for(var c in e)"default"!==c&&function(n){o.d(t,n,function(){return e[n]})}(c);t["default"]=i.a},dc8f:function(n,t,o){"use strict";var e=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("v-uni-view",[o("page-head",{attrs:{title:"websocket通讯示例"}}),o("v-uni-view",{staticClass:"uni-padding-wrap"},[o("v-uni-view",{staticClass:"uni-btn-v"},[o("v-uni-view",{staticClass:"websocket-msg"},[n._v(n._s(n.showMsg))]),o("v-uni-input",{staticClass:"websocket-room",attrs:{type:"text",value:"",placeholder:"请输入一个房间号"},model:{value:n.roomId,callback:function(t){n.roomId="string"===typeof t?t.trim():t},expression:"roomId"}}),o("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.connect.apply(void 0,arguments)}}},[n._v("连接websocket服务")]),o("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:n.connected,expression:"connected"}],attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.send.apply(void 0,arguments)}}},[n._v("发送一条消息")]),o("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.close.apply(void 0,arguments)}}},[n._v("断开websocket服务")]),o("v-uni-view",{staticClass:"websocket-msg"},[n._v("同时运行两个hello uniapp填入相同的房间号进行测试")])],1)],1)],1)},i=[];o.d(t,"a",function(){return e}),o.d(t,"b",function(){return i})},e9aa:function(n,t,o){"use strict";o.r(t);var e=o("dc8f"),i=o("abb4");for(var c in i)"default"!==c&&function(n){o.d(t,n,function(){return i[n]})}(c);o("0881");var a=o("2877"),s=Object(a["a"])(i["default"],e["a"],e["b"],!1,null,"13190a6b",null);t["default"]=s.exports},f5df:function(n,t,o){t=n.exports=o("2350")(!1),t.push([n.i,".uni-padding-wrap[data-v-13190a6b]{width:%?690?%;padding:0 %?30?%}.uni-btn-v[data-v-13190a6b]{padding:%?10?% 0}.uni-btn-v uni-button[data-v-13190a6b]{margin:%?20?% 0}.websocket-room[data-v-13190a6b]{height:40px;line-height:40px;text-align:center;border-bottom:solid 1px #ddd;margin-bottom:20px}.websocket-msg[data-v-13190a6b]{padding:40px 0;text-align:center;font-size:14px;line-height:40px;color:#666}",""])}}]);