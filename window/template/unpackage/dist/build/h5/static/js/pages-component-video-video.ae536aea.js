(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-video-video"],{"04bd":function(t,n,i){"use strict";var e=i("fc1b"),a=i.n(e);a.a},4552:function(t,n,i){"use strict";i.r(n);var e=i("6094"),a=i("4ad0");for(var o in a)"default"!==o&&function(t){i.d(n,t,function(){return a[t]})}(o);i("04bd");var u=i("2877"),s=Object(u["a"])(a["default"],e["a"],e["b"],!1,null,"5b071fa2",null);n["default"]=s.exports},"4ad0":function(t,n,i){"use strict";i.r(n);var e=i("e451"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,function(){return e[t]})}(o);n["default"]=a.a},6094:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),t.showVideo?i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-view",[i("v-uni-video",{attrs:{id:"myVideo",src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v","danmu-list":t.danmuList,"enable-danmu":"","danmu-btn":"",controls:"",poster:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/poster.png"},on:{error:function(n){arguments[0]=n=t.$handleEvent(n),t.videoErrorCallback.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"uni-list uni-common-mt"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",[i("v-uni-view",{staticClass:"uni-label"},[t._v("弹幕内容")])],1),i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"在此处输入弹幕内容"},model:{value:t.danmuValue,callback:function(n){t.danmuValue=n},expression:"danmuValue"}})],1)],1)],1),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{staticClass:"page-body-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.sendDanmu.apply(void 0,arguments)}}},[t._v("发送弹幕")])],1)],1):t._e()],1)},a=[];i.d(n,"a",function(){return e}),i.d(n,"b",function(){return a})},7520:function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,"uni-video[data-v-5b071fa2]{width:%?690?%}",""])},e451:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,i("6b54");var e={data:function(){return{title:"video",src:"",danmuList:[{text:"第 1s 出现的弹幕",color:"#ff0000",time:1},{text:"第 3s 出现的弹幕",color:"#ff00ff",time:3}],danmuValue:"",showVideo:!1}},onReady:function(t){this.videoContext=uni.createVideoContext("myVideo"),this.showVideo=!0},methods:{sendDanmu:function(){this.videoContext.sendDanmu({text:this.danmuValue,color:this.getRandomColor()}),this.danmuValue=""},videoErrorCallback:function(t){uni.showModal({content:t.target.errMsg,showCancel:!1})},getRandomColor:function(){for(var t=[],n=0;n<3;++n){var i=Math.floor(256*Math.random()).toString(16);i=1==i.length?"0"+i:i,t.push(i)}return"#"+t.join("")}}};n.default=e},fc1b:function(t,n,i){var e=i("7520");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("10256f14",e,!0,{sourceMap:!1,shadowMode:!1})}}]);