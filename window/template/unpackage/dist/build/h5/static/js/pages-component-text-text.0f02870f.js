(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-text-text"],{5578:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"body[data-v-4840e008]{background-color:#fff}.uni-page-body[data-v-4840e008]{background-color:#f5f5f5}.uni-common-pl[data-v-4840e008]{color:#a4a9b0}.panel[data-v-4840e008]{background-color:#fff;padding:.5rem}.panel>uni-view>uni-view[data-v-4840e008]{display:inline-block}.panel .num[data-v-4840e008]{color:#c1a846}.panel>uni-view[data-v-4840e008]{margin-bottom:.3rem}.charts[data-v-4840e008]{width:%?750?%;height:%?500?%;background-color:#fff}.uni-title[data-v-4840e008]{font-size:12px}.item-title[data-v-4840e008]{padding-left:1rem;height:2.4rem;line-height:2.4rem;background-color:#fff;font-weight:700}.t-th[data-v-4840e008]{font-size:12px;color:#878787}.t-td[data-v-4840e008]{color:#333;font-size:12px}.uni-icons[data-v-4840e008]{font-weight:700}",""])},"6e5ff":function(t,i,e){"use strict";var a=e("ea96"),n=e.n(a);n.a},7502:function(t,i,e){"use strict";e.r(i);var a=e("a333"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a},a333:function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n,s=a(e("bd86")),u=a(e("d3ab")),o=a(e("d642")),c=a(e("7b31")),l=a(e("fef6")),r=a(e("c3e8")),v=a(e("e34b")),d={};function h(t){var i=new Date,e=i.getFullYear(),a=i.getMonth()+1,n=i.getDate();return"start"===t?e-=60:"end"===t&&(e+=2),a=a>9?a:"0"+a,n=n>9?n:"0"+n,"".concat(e,"-").concat(a,"-").concat(n)}var p={components:{tTable:o.default,tTh:c.default,tTr:l.default,tTd:r.default,uniIcons:v.default},data:function(){return{title:"picker",array:[{name:"苏州园区店"},{name:"苏州姑苏店"}],index:0,array1:[{name:"2019-11"},{name:"2019-12"}],index1:0,multiArray:[["亚洲","欧洲"],["中国","日本"],["北京","上海","广州"]],multiIndex:[0,0,0],date:h({format:!0}),startDate:h("start"),endDate:h("end"),time:"12:01",cWidth:"",cHeight:"",cWidth2:"",cHeight2:"",cWidth3:"",cHeight3:"",arcbarWidth:"",gaugeWidth:"",tips:"",pixelRatio:1,serverData:"",itemCount:30,sliderMax:50,tableList:[{id:"材料成本",name:"100.30万元",age:"400.50万元",hobby:"5.23%",isup:1},{id:"施工成本",name:"100.30万元",age:"100.50万元",hobby:"12.12%",isup:2},{id:"其他成本",name:"100.30万元",age:"100.50万元",hobby:"——",isup:3}]}},onLoad:function(){n=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500),this.cWidth2=uni.upx2px(700),this.cHeight2=uni.upx2px(1100),this.cWidth3=uni.upx2px(250),this.cHeight3=uni.upx2px(250),this.arcbarWidth=uni.upx2px(24),this.gaugeWidth=uni.upx2px(30)},onReady:function(){this.getServerData()},methods:{change:function(t){console.log(t.detail)},getServerData:function(){uni.showLoading({title:"正在加载数据..."}),uni.request({url:"https://unidemo.dcloud.net.cn/hello-uniapp-ucharts-data.json",data:{},success:function(t){n.fillData(t.data)},fail:function(){n.tips="网络错误，小程序端请检查合法域名"},complete:function(){uni.hideLoading()}})},fillData:function(t){this.serverData=t;var i={categories:[],series:[]};i.categories=["04/19","05/19","06/19","07/19","08/19","09/19"],i.series=[{data:[35,8,25,37,4,20],name:"本门店"},{data:[70,40,65,100,44,68],name:"所有门店平均"}],this.showLineA("canvasLineA",i)},showLineA:function(t,i){var e;d[t]=new u.default((e={$this:n,canvasId:t,type:"line",fontSize:11,padding:[15,15,0,15],legend:{show:!0,position:"top",float:"center",itemGap:30,padding:5,lineHeight:18},colors:["#BFA643","#A6A6A6"],dataLabel:!1,dataPointShape:!1,background:"#FFFFFF",pixelRatio:n.pixelRatio,categories:i.categories,series:i.series,animation:!1,enableScroll:!0,xAxis:{disableGrid:!1,type:"grid",gridType:"dash",itemCount:4,scrollShow:!0,scrollAlign:"left"},yAxis:{gridType:"dash",splitNumber:8,min:10,max:180,format:function(t){return t.toFixed(0)}},width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio},(0,s.default)(e,"dataLabel",!0),(0,s.default)(e,"dataPointShape",!0),(0,s.default)(e,"extra",{lineStyle:"straight"}),e))},touchLineA:function(t){d["canvasLineA"].scrollStart(t)},moveLineA:function(t){d["canvasLineA"].scroll(t)},touchEndLineA:function(t){d["canvasLineA"].scrollEnd(t),d["canvasLineA"].showToolTip(t,{format:function(t,i){return i+" "+t.name+":"+t.data}})},bindPickerChange:function(t){console.log("picker发送选择改变，携带值为："+t.target.value),this.index=t.target.value},bindPickerChange1:function(t){console.log("picker发送选择改变，携带值为："+t.target.value),this.index1=t.target.value1},bindMultiPickerColumnChange:function(t){switch(console.log("修改的列为："+t.detail.column+"，值为："+t.detail.value),this.multiIndex[t.detail.column]=t.detail.value,t.detail.column){case 0:switch(this.multiIndex[0]){case 0:this.multiArray[1]=["中国","日本"],this.multiArray[2]=["北京","上海","广州"];break;case 1:this.multiArray[1]=["英国","法国"],this.multiArray[2]=["伦敦","曼彻斯特"];break}this.multiIndex.splice(1,1,0),this.multiIndex.splice(2,1,0);break;case 1:switch(this.multiIndex[0]){case 0:switch(this.multiIndex[1]){case 0:this.multiArray[2]=["北京","上海","广州"];break;case 1:this.multiArray[2]=["东京","北海道"];break}break;case 1:switch(this.multiIndex[1]){case 0:this.multiArray[2]=["伦敦","曼彻斯特"];break;case 1:this.multiArray[2]=["巴黎","马赛"];break}break}this.multiIndex.splice(2,1,0);break}this.$forceUpdate()},bindDateChange:function(t){this.date=t.target.value},bindTimeChange:function(t){this.time=t.target.value}}};i.default=p},ea96:function(t,i,e){var a=e("5578");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("37d5ac46",a,!0,{sourceMap:!1,shadowMode:!1})},f9db:function(t,i,e){"use strict";e.r(i);var a=e("fea5"),n=e("7502");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);e("6e5ff");var u=e("2877"),o=Object(u["a"])(n["default"],a["a"],a["b"],!1,null,"4840e008",null);i["default"]=o.exports},fea5:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[t._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{value:t.index,range:t.array,"range-key":"name"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.bindPickerChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.array[t.index].name))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[t._v("概况")]),e("v-uni-view",{staticClass:"panel"},[e("v-uni-view",[t._v("本双周结算分析"),e("v-uni-view",{staticClass:"num"},[t._v("367户")]),t._v(",平均毛利率"),e("v-uni-view",{staticClass:"num"},[t._v("32.08%")]),t._v(",环比上双周平均毛利率下降"),e("v-uni-view",{staticClass:"num"},[t._v("0.73个")]),t._v("百分点")],1),e("v-uni-view",[t._v("9月截至当前结算分析"),e("v-uni-view",{staticClass:"num"},[t._v("367户")]),t._v(",平均毛利率"),e("v-uni-view",{staticClass:"num"},[t._v("32.08%")]),t._v(",环比上月平均毛利率下降"),e("v-uni-view",{staticClass:"num"},[t._v("0.73个")]),t._v("百分点")],1),e("v-uni-view",[t._v("本年度结算分析"),e("v-uni-view",{staticClass:"num"},[t._v("367户")]),t._v(",平均毛利率"),e("v-uni-view",{staticClass:"num"},[t._v("32.08%")]),t._v(",相比上年度平均毛利率上升"),e("v-uni-view",{staticClass:"num"},[t._v("0.73个")]),t._v("百分点")],1),e("v-uni-view",[t._v("累计结算分析"),e("v-uni-view",{staticClass:"num"},[t._v("367户")]),t._v(",平均毛利率"),e("v-uni-view",{staticClass:"num"},[t._v("32.08%")])],1),e("v-uni-view",[t._v("所有门店9月截至当前平均毛利率"),e("v-uni-view",{staticClass:"num"},[t._v("367户")]),t._v(",本年度平均毛利率"),e("v-uni-view",{staticClass:"num"},[t._v("32.08%")])],1)],1),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[t._v("趋势图")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{value:t.index1,range:t.array1,"range-key":"name"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.bindPickerChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.array1[t.index1].name))])],1)],1),e("v-uni-view",{staticClass:"qiun-charts"},[e("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasLineA",id:"canvasLineA","disable-scroll":"true"},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.touchLineA.apply(void 0,arguments)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.moveLineA.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.touchEndLineA.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[t._v("详细分析")]),e("v-uni-view",{staticClass:"item-title"},[t._v("成本结构")]),e("v-uni-view",{staticClass:"box"},[e("t-table",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},[e("t-tr",[e("t-th",{attrs:{align:"center"}},[t._v("分类")]),e("t-th",{attrs:{align:"center"}},[t._v("月截止当前")]),e("t-th",{attrs:{align:"center"}},[t._v("19年8月")]),e("t-th",{attrs:{align:"center"}},[t._v("比率")])],1),t._l(t.tableList,function(i){return e("t-tr",{key:i.id},[e("t-td",[t._v(t._s(i.id+1))]),e("t-td",[t._v(t._s(i.name))]),e("t-td",[t._v(t._s(i.age))]),e("t-td",[e("uni-icons",{directives:[{name:"show",rawName:"v-show",value:1==i.isup,expression:"item.isup==1"}],attrs:{type:"arrowthindown",color:"#D55B55",size:"20"}}),e("uni-icons",{directives:[{name:"show",rawName:"v-show",value:2==i.isup,expression:"item.isup==2"}],attrs:{type:"arrowthinup",color:"#39BD8B",size:"20"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:1==i.isup,expression:"item.isup==1"}],staticStyle:{color:"#D55B55"}},[t._v(t._s(i.hobby))]),e("span",{directives:[{name:"show",rawName:"v-show",value:2==i.isup,expression:"item.isup==2"}],staticStyle:{color:"#39BD8B"}},[t._v(t._s(i.hobby))]),e("span",{directives:[{name:"show",rawName:"v-show",value:3==i.isup,expression:"item.isup==3"}]},[t._v(t._s(i.hobby))])],1)],1)})],2)],1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})}}]);