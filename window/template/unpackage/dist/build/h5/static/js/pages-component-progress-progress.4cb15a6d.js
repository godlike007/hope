(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-progress-progress"],{7552:function(t,e,s){"use strict";var r=s("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(s("e34b")),i={data:function(){return{title:"progress",pgList:[0,0,0,0]}},components:{uniIcons:n.default},methods:{setProgress:function(){this.pgList=[20,40,60,80]},clearProgress:function(){this.pgList=[0,0,0,0]}}};e.default=i},"9cdb":function(t,e,s){e=t.exports=s("2350")(!1),e.push([t.i,".progress-box[data-v-5aa2e717]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?50?%;margin-bottom:%?60?%}.uni-icon[data-v-5aa2e717]{line-height:1.5}.progress-cancel[data-v-5aa2e717]{margin-left:%?40?%}.progress-control uni-button[data-v-5aa2e717]{margin-top:%?20?%}",""])},a2fc:function(t,e,s){"use strict";s.r(e);var r=s("7552"),n=s.n(r);for(var i in r)"default"!==i&&function(t){s.d(e,t,function(){return r[t]})}(i);e["default"]=n.a},acbb:function(t,e,s){"use strict";s.r(e);var r=s("e820"),n=s("a2fc");for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);s("c475");var a=s("2877"),o=Object(a["a"])(n["default"],r["a"],r["b"],!1,null,"5aa2e717",null);e["default"]=o.exports},bd60:function(t,e,s){var r=s("9cdb");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=s("4f06").default;n("90bb340a",r,!0,{sourceMap:!1,shadowMode:!1})},c475:function(t,e,s){"use strict";var r=s("bd60"),n=s.n(r);n.a},e820:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",[s("page-head",{attrs:{title:t.title}}),s("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[s("v-uni-view",{staticClass:"progress-box"},[s("v-uni-progress",{attrs:{percent:t.pgList[0],"show-info":"","stroke-width":"3"}})],1),s("v-uni-view",{staticClass:"progress-box"},[s("v-uni-progress",{attrs:{percent:t.pgList[1],"stroke-width":"3"}}),s("uni-icons",{staticClass:"progress-cancel",attrs:{type:"close",color:"#dd524d"}})],1),s("v-uni-view",{staticClass:"progress-box"},[s("v-uni-progress",{attrs:{percent:t.pgList[2],"stroke-width":"3"}})],1),s("v-uni-view",{staticClass:"progress-box"},[s("v-uni-progress",{attrs:{percent:t.pgList[3],activeColor:"#10AEFF","stroke-width":"3"}})],1),s("v-uni-view",{staticClass:"progress-control"},[s("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setProgress.apply(void 0,arguments)}}},[t._v("设置进度")]),s("v-uni-button",{attrs:{type:"warn"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearProgress.apply(void 0,arguments)}}},[t._v("清除进度")])],1)],1)],1)},n=[];s.d(e,"a",function(){return r}),s.d(e,"b",function(){return n})}}]);