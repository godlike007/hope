(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-animation-animation"],{"028d":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{title:"createAnimation",animationData:""}},onUnload:function(){this.animationData=""},onLoad:function(){this.animation=uni.createAnimation()},methods:{rotate:function(){this.animation.rotate(720*Math.random()-360).step(),this.animationData=this.animation.export()},scale:function(){this.animation.scale(2*Math.random()).step(),this.animationData=this.animation.export()},translate:function(){this.animation.translate(100*Math.random()-50,100*Math.random()-50).step(),this.animationData=this.animation.export()},skew:function(){this.animation.skew(90*Math.random(),90*Math.random()).step(),this.animationData=this.animation.export()},rotateAndScale:function(){this.animation.rotate(720*Math.random()-360).scale(2*Math.random()).step(),this.animationData=this.animation.export()},rotateThenScale:function(){this.animation.rotate(720*Math.random()-360).step().scale(2*Math.random()).step(),this.animationData=this.animation.export()},all:function(){this.animation.rotate(720*Math.random()-360).scale(2*Math.random()).translate(100*Math.random()-50,100*Math.random()-50).skew(90*Math.random(),90*Math.random()).step(),this.animationData=this.animation.export()},allInQueue:function(){this.animation.rotate(720*Math.random()-360).step().scale(2*Math.random()).step().translate(100*Math.random()-50,100*Math.random()-50).step().skew(90*Math.random(),90*Math.random()).step(),this.animationData=this.animation.export()},reset:function(){this.animation.rotate(0,0).scale(1).translate(0,0).skew(0,0).step({duration:0}),this.animationData=this.animation.export()}}};a.default=i},"0b3a":function(t,a,n){"use strict";var i=n("56d2"),o=n.n(i);o.a},1868:function(t,a,n){"use strict";var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"animation-element-wrapper"},[n("v-uni-view",{staticClass:"animation-element",attrs:{animation:t.animationData}})],1),n("v-uni-scroll-view",{staticClass:"animation-buttons",attrs:{"scroll-y":"true"}},[n("v-uni-button",{staticClass:"animation-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rotate.apply(void 0,arguments)}}},[t._v("旋转")]),n("v-uni-button",{staticClass:"animation-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.scale.apply(void 0,arguments)}}},[t._v("缩放")]),n("v-uni-button",{staticClass:"animation-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.translate.apply(void 0,arguments)}}},[t._v("移动")]),n("v-uni-button",{staticClass:"animation-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.skew.apply(void 0,arguments)}}},[t._v("倾斜")]),n("v-uni-button",{staticClass:"animation-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rotateAndScale.apply(void 0,arguments)}}},[t._v("旋转并缩放")]),n("v-uni-button",{staticClass:"animation-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rotateThenScale.apply(void 0,arguments)}}},[t._v("旋转后缩放")]),n("v-uni-button",{staticClass:"animation-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.all.apply(void 0,arguments)}}},[t._v("同时展示全部")]),n("v-uni-button",{staticClass:"animation-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.allInQueue.apply(void 0,arguments)}}},[t._v("顺序展示全部")]),n("v-uni-button",{staticClass:"animation-button animation-button-reset",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.reset.apply(void 0,arguments)}}},[t._v("还原")])],1)],1)],1)},o=[];n.d(a,"a",function(){return i}),n.d(a,"b",function(){return o})},"34d8":function(t,a,n){a=t.exports=n("2350")(!1),a.push([t.i,".animation-element-wrapper[data-v-1b2f77bb]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;padding-top:%?150?%;padding-bottom:%?150?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;overflow:hidden;background-color:#fff}.animation-element[data-v-1b2f77bb]{width:%?200?%;height:%?200?%;background-color:#1aad19}.animation-buttons[data-v-1b2f77bb]{padding:%?30?% 0;width:100%;height:%?360?%}.animation-button[data-v-1b2f77bb]{float:left;width:44%;margin:%?15?% 3%}.animation-button-reset[data-v-1b2f77bb]{width:94%}",""])},4256:function(t,a,n){"use strict";n.r(a);var i=n("028d"),o=n.n(i);for(var e in i)"default"!==e&&function(t){n.d(a,t,function(){return i[t]})}(e);a["default"]=o.a},"56d2":function(t,a,n){var i=n("34d8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("20bddc63",i,!0,{sourceMap:!1,shadowMode:!1})},e66b:function(t,a,n){"use strict";n.r(a);var i=n("1868"),o=n("4256");for(var e in o)"default"!==e&&function(t){n.d(a,t,function(){return o[t]})}(e);n("0b3a");var s=n("2877"),r=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"1b2f77bb",null);a["default"]=r.exports}}]);