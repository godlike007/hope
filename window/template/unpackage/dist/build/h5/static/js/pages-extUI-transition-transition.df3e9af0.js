(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-transition-transition"],{"001d":function(t,n,e){"use strict";var i=e("76b4"),a=e.n(i);a.a},"39c9":function(t,n,e){"use strict";var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("a481"),e("ac6a");var a=i(e("cebc"));e("c5f6");var o={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=(0,a.default)({},this.styles,{"transition-duration":this.duration/1e3+"s"}),n="";for(var e in t){var i=this.toLine(e);n+=i+":"+t[e]+";"}return n}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var n in this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===n?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[n]," ");this.$nextTick(function(){setTimeout(function(){t._animation(!0)},50)})},close:function(t){this._animation(!1)},_animation:function(t){var n=this,e=this.getTranfrom(t);for(var i in this.transform="",e)"opacity"===i?this.ani.in="fade-".concat(t?"out":"in"):this.transform+="".concat(e[i]," ");clearTimeout(this.timer),this.timer=setTimeout(function(){t||(n.isShow=!1),n.$emit("change",{detail:n.isShow})},this.duration)},getTranfrom:function(t){var n={transform:""};return this.modeClass.forEach(function(e){switch(e){case"fade":n.opacity=t?1:0;break;case"slide-top":n.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":n.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":n.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":n.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":n.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":n.transform+="scale(".concat(t?1:1.2,") ");break}}),n},_modeClassArr:function(t){var n=this.modeClass;if("string"!==typeof n){var e="";return n.forEach(function(n){e+=n+"-"+t+","}),e.substr(0,e.length-1)}return n+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};n.default=o},"68f5":function(t,n,e){"use strict";var i=e("e5d5"),a=e.n(i);a.a},7626:function(t,n,e){e("b041");n=t.exports=e("2350")(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\n\nuni-page-body[data-v-6e75edaf]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-6e75edaf]{font-size:14px;line-height:inherit}.example[data-v-6e75edaf]{padding:0 15px 15px}.example-info[data-v-6e75edaf]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-6e75edaf]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-6e75edaf]{padding:0 15px}.example-info[data-v-6e75edaf]{\n\tdisplay:block;\n\tpadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-6e75edaf]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-6e75edaf]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-6e75edaf]{font-size:18px;color:#fff}.word-btn[data-v-6e75edaf]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-6e75edaf]{background-color:#4ca2ff}.example-body[data-v-6e75edaf]{padding:15px 20px;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.transition-button[data-v-6e75edaf]{\n\t\n\t/* width: 100%; */\n\tpadding:0 15px;margin:10px 5px}.box[data-v-6e75edaf]{color:#fff;width:100px;height:100px;line-height:100px;text-align:center;background-color:#4cd964}body.?%PAGE?%[data-v-6e75edaf]{background-color:#efeff4}",""])},"76b4":function(t,n,e){var i=e("7626");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("bf0af97e",i,!0,{sourceMap:!1,shadowMode:!1})},"8f78":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isShow?e("v-uni-view",{ref:"ani",staticClass:"uni-transition",class:[t.ani.in],style:"transform:"+t.transform+";"+t.stylesObject,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.change.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"9e3f":function(t,n,e){"use strict";var i=e("dc16"),a=e.n(i);a.a},ad28:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'.uni-section[data-v-f03c78d0]{position:relative;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\tfont-weight:400}\n\n.uni-section[data-v-f03c78d0]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n\n.uni-section__head[data-v-f03c78d0]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-f03c78d0]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-f03c78d0]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-f03c78d0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-f03c78d0]{font-size:%?28?%;color:#333}.distraction[data-v-f03c78d0]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-f03c78d0]{font-size:%?24?%;color:#999}',""])},affd:function(t,n,e){"use strict";e.r(n);var i=e("8f78"),a=e("b407");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("9e3f");var r=e("2877"),s=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"cae83934",null);n["default"]=s.exports},b407:function(t,n,e){"use strict";e.r(n);var i=e("39c9"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},bda5:function(t,n,e){"use strict";e.r(n);var i=e("c8dc"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},c43a:function(t,n,e){"use strict";e.r(n);var i=e("f410a"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},c70e:function(t,n,e){"use strict";e.r(n);var i=e("f9b6"),a=e("bda5");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("68f5");var r=e("2877"),s=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"f03c78d0",null);n["default"]=s.exports},c8dc:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};n.default=i},dc16:function(t,n,e){var i=e("f910");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("b4b8d90a",i,!0,{sourceMap:!1,shadowMode:!1})},dcf2:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-text",{staticClass:"example-info"},[t._v("过渡动画，通常用于元素的过渡效果，例如淡隐淡出效果，遮罩层的效果、放大缩小的效果等")]),e("uni-section",{attrs:{title:"基础过渡动画",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("v-uni-button",{staticClass:"transition-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open(["fade"])}}},[t._v("fade")]),e("v-uni-button",{staticClass:"transition-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open(["slide-top"])}}},[t._v("slide-top")]),e("v-uni-button",{staticClass:"transition-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open(["slide-left"])}}},[t._v("slide-left")]),e("v-uni-button",{staticClass:"transition-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open(["slide-right"])}}},[t._v("slide-right")]),e("v-uni-button",{staticClass:"transition-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open(["slide-bottom"])}}},[t._v("slide-bottom")]),e("v-uni-button",{staticClass:"transition-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open(["zoom-in","fade"])}}},[t._v("zoom-in")]),e("v-uni-button",{staticClass:"transition-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open(["zoom-out","fade"])}}},[t._v("zoom-out")])],1),e("uni-section",{attrs:{title:"组合过渡动画",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("v-uni-button",{staticClass:"transition-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.mask.apply(void 0,arguments)}}},[t._v("透明遮罩层")]),e("v-uni-button",{staticClass:"transition-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open(["fade","zoom-out","slide-top"])}}},[t._v("slide-top && zoom-out && fade")]),e("v-uni-button",{staticClass:"transition-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open(["zoom-in","slide-bottom","fade"])}}},[t._v("zoom-in && slide-bottom && fade")]),e("v-uni-button",{staticClass:"transition-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open(["slide-left","slide-top","fade"])}}},[t._v("slide-left && slide-top && fade")])],1),e("uni-transition",{attrs:{"mode-class":["fade"],styles:t.maskClass,show:t.show},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onTap.apply(void 0,arguments)}}}),e("uni-transition",{attrs:{duration:500,"mode-class":t.modeClass,styles:t.transfromClass,show:t.transShow},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onTap.apply(void 0,arguments)},change:function(n){arguments[0]=n=t.$handleEvent(n),t.change.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"box"},[t._v("Test")])],1)],1)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},e5d5:function(t,n,e){var i=e("ad28");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("28fe5e68",i,!0,{sourceMap:!1,shadowMode:!1})},f007:function(t,n,e){"use strict";e.r(n);var i=e("dcf2"),a=e("c43a");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("001d");var r=e("2877"),s=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"6e75edaf",null);n["default"]=s.exports},f410a:function(t,n,e){"use strict";var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("c70e")),o=i(e("affd")),r={components:{uniSection:a.default,uniTransition:o.default},data:function(){return{show:!1,transShow:!1,modeClass:["fade"],maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,"background-color":"rgba(0, 0, 0, 0.4)"},transfromClass:{position:"fixed",bottom:0,top:0,left:0,right:0,display:"flex","justify-content":"center","align-items":"center"}}},onLoad:function(){},methods:{mask:function(){this.show=!0},open:function(t){this.modeClass=t,this.transShow=!this.transShow},onTap:function(){this.transShow=this.show=!1},change:function(t){console.log(t.detail)}}};n.default=r},f910:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".uni-transition[data-v-cae83934]{-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fade-in[data-v-cae83934]{opacity:0}.fade-active[data-v-cae83934]{opacity:1}.slide-top-in[data-v-cae83934]{\n\t/* transition-property: transform, opacity; */-webkit-transform:translateY(-100%);transform:translateY(-100%)}.slide-top-active[data-v-cae83934]{-webkit-transform:translateY(0);transform:translateY(0)\n\t/* opacity: 1; */}.slide-right-in[data-v-cae83934]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slide-right-active[data-v-cae83934]{-webkit-transform:translateX(0);transform:translateX(0)}.slide-bottom-in[data-v-cae83934]{-webkit-transform:translateY(100%);transform:translateY(100%)}.slide-bottom-active[data-v-cae83934]{-webkit-transform:translateY(0);transform:translateY(0)}.slide-left-in[data-v-cae83934]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slide-left-active[data-v-cae83934]{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.zoom-in-in[data-v-cae83934]{-webkit-transform:scale(.8);transform:scale(.8)}.zoom-out-active[data-v-cae83934]{-webkit-transform:scale(1);transform:scale(1)}.zoom-out-in[data-v-cae83934]{-webkit-transform:scale(1.2);transform:scale(1.2)}",""])},f9b6:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-section"},[t.type?e("v-uni-view",{staticClass:"uni-section__head"},[e("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),e("v-uni-view",{staticClass:"uni-section__content"},[e("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?e("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})}}]);