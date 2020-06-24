<template>
	<view>
		<!-- <page-head :title="title"></page-head> -->
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="uni-input">{{array[index].name}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="uni-title uni-common-pl">概况</view>
		<view class="panel">
			<view>
			本双周结算分析 <view class="num">367户</view>,平均毛利率 <view class="num">32.08%</view>,环比上双周平均毛利率下降 <view class="num">0.73个</view>百分点
			</view>
			<view>
			9月截至当前结算分析  <view class="num">367户</view>,平均毛利率 <view class="num">32.08%</view>,环比上月平均毛利率下降  <view class="num">0.73个</view>百分点
			</view>
			<view>
			本年度结算分析  <view class="num">367户</view>,平均毛利率  <view class="num">32.08%</view>,相比上年度平均毛利率上升  <view class="num">0.73个</view>百分点
			</view>
			<view>
			累计结算分析  <view class="num">367户</view>,平均毛利率 <view class="num">32.08%</view>
			</view>
			<view>
			所有门店9月截至当前平均毛利率  <view class="num">367户</view>,本年度平均毛利率   <view class="num">32.08%</view>
			</view>
		</view>
		
		<view class="uni-title uni-common-pl">趋势图</view>
		<view class="uni-list-cell-db">
			<picker @change="bindPickerChange" :value="index1" :range="array1" range-key="name">
				<view class="uni-input">{{array1[index1].name}}</view>
			</picker>
		</view>

	<view class="qiun-charts">
		<!--#ifdef MP-ALIPAY -->
		<canvas
			canvas-id="canvasLineA"
			id="canvasLineA"
			class="charts"
			:width="cWidth * pixelRatio"
			:height="cHeight * pixelRatio"
			:style="{ width: cWidth + 'px', height: cHeight + 'px' }"
			disable-scroll="true"
			@touchstart="touchLineA"
			@touchmove="moveLineA"
			@touchend="touchEndLineA"
		></canvas>
		<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
		<!--#endif-->
		<!--#ifndef MP-ALIPAY -->
		<canvas
			canvas-id="canvasLineA"
			id="canvasLineA"
			class="charts"
			disable-scroll="true"
			@touchstart="touchLineA"
			@touchmove="moveLineA"
			@touchend="touchEndLineA"
		></canvas>
		<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
		<!--#endif-->
	</view>
	
		<view class="uni-title uni-common-pl">详细分析</view>
		<view class="item-title">成本结构</view>
		<view class="box">
			<t-table @change="change">
				<t-tr>
					<t-th align="center">分类</t-th>
					<t-th align="center">月截止当前</t-th>
					<t-th align="center">19年8月</t-th>
					<t-th align="center">比率</t-th>
				</t-tr>
				<t-tr v-for="item in tableList" :key="item.id">
					<t-td>{{ item.id + 1 }}</t-td>
					<t-td>{{ item.name }}</t-td>
					<t-td>{{ item.age }}</t-td>
					<t-td>
					<uni-icons v-show="item.isup==1" type="arrowthindown" color="#D55B55" size="20" />
					<uni-icons v-show="item.isup==2" type="arrowthinup" color="#39BD8B" size="20" />
					<span  v-show="item.isup==1" style="color:#D55B55">{{ item.hobby }}</span>
					<span  v-show="item.isup==2" style="color:#39BD8B">{{ item.hobby }}</span>
					<span  v-show="item.isup==3">{{ item.hobby }}</span>
					</t-td>
				</t-tr>
			</t-table>
		</view>
	</view>	

</template>
<script>
	import uCharts from '../../../components/u-charts/u-charts.js';
	import tTable from '../../../components/t-table/t-table.vue';
	import tTh from '../../../components/t-table/t-th.vue';
	import tTr from '../../../components/t-table/t-tr.vue';
	import tTd from '../../../components/t-table/t-td.vue';
	import uniIcons from '../../../components/uni-icons/uni-icons.vue';
	
	var _self;
	var canvasObj = {};
	function getDate(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}-${month}-${day}`;
	}
	export default {
		components: {
			tTable,
			tTh,
			tTr,
			tTd,
			uniIcons,
		},
		data() {
			return {
				title: 'picker',
				array: [{name:'苏州园区店'},{name: '苏州姑苏店'}],
				index: 0,
				array1: [{name:'2019-11'},{name: '2019-12'}],
				index1: 0,
				
				multiArray: [
					['亚洲', '欧洲'],
					['中国', '日本'],
					['北京', '上海', '广州']
				],
				multiIndex: [0, 0, 0],
				date: getDate({
					format: true
				}),
				startDate:getDate('start'),
				endDate:getDate('end'),
				time: '12:01',
	
				cWidth: '',
				cHeight: '',
				cWidth2: '', //横屏图表
				cHeight2: '', //横屏图表
				cWidth3: '', //圆弧进度图
				cHeight3: '', //圆弧进度图
				arcbarWidth: '', //圆弧进度图，进度条宽度,此设置可使各端宽度一致
				gaugeWidth: '', //仪表盘宽度,此设置可使各端宽度一致
				tips: '',
				pixelRatio: 1,
				serverData: '',
				itemCount: 30, //x轴单屏数据密度
				sliderMax: 50,
				
				tableList: [{
						id: '材料成本',
						name: '100.30万元',
						age: '400.50万元',
						hobby: '5.23%',
						isup:1
					},
					{
						id: '施工成本',
						name: '100.30万元',
						age: '100.50万元',
						hobby: '12.12%',
						isup:2
					},
					{
						id: '其他成本',
						name: '100.30万元',
						age: '100.50万元',
						hobby: '——',
						isup:3
					}
				]
			}
		},
		onLoad() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function(res) {
					if (res.pixelRatio > 1) {
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 2;
					}
				}
			});
			//#endif
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.cWidth2 = uni.upx2px(700);
			this.cHeight2 = uni.upx2px(1100);
			this.cWidth3 = uni.upx2px(250);
			this.cHeight3 = uni.upx2px(250);
			this.arcbarWidth = uni.upx2px(24);
			this.gaugeWidth = uni.upx2px(30);
		
			//this.fillData(Data);
		},
		onReady() {
			this.getServerData();
		},
		methods: {
			change(e) {
				console.log(e.detail);
			},
			getServerData() {
				uni.showLoading({
					title: "正在加载数据..."
				})
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/hello-uniapp-ucharts-data.json',
					//url: 'http://appservice.jtljia.net/appjia/commonReport/detail',
					data: {},
					success: function(res) {
						_self.fillData(res.data);
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
					complete() {
						uni.hideLoading();
					}
				});
			},
			fillData(data) {
				this.serverData = data;

				let LineA = {
					categories: [],
					series: []
				};

				LineA.categories = ["04/19","05/19","06/19","07/19","08/19","09/19"];
				LineA.series = [{
					data: [35, 8, 25, 37, 4, 20],
					name:"本门店"
				},{
					data:[70, 40, 65, 100, 44, 68],
					name:"所有门店平均"
				}]

				this.showLineA('canvasLineA', LineA);
			},
			
			showLineA(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 11,
					padding:[15,15,0,15],
					legend:{
						show:true,
							position: 'top',
					float: 'center',
					itemGap: 30,
					padding: 5,
					lineHeight:18,
					},
					colors:["#BFA643","#A6A6A6"],
					dataLabel: false,
					dataPointShape: false,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: false,
					enableScroll: true, //开启图表拖拽功能
					xAxis: {
						disableGrid: false,
						type: 'grid',
						gridType: 'dash',
						itemCount: 4, 
						scrollShow: true, 
						scrollAlign: 'left',
						//scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
						//scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
					},
					yAxis: {
						//disabled:true
						//title:"毛利率",
						gridType: 'dash',
						splitNumber: 8,
						min: 10,
						max: 180,
						format: (val) => {
							return val.toFixed(0)
						} //如不写此方法，Y轴刻度默认保留两位小数
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
					dataPointShape: true,
					extra: {
						lineStyle: 'straight'
					},
				});
			
			},
			touchLineA(e) {
				canvasObj['canvasLineA'].scrollStart(e);
			},
			moveLineA(e) {
				canvasObj['canvasLineA'].scroll(e);
			},
			touchEndLineA(e) {
				canvasObj['canvasLineA'].scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvasObj['canvasLineA'].showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data;
					}
				});
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.target.value)
				this.index = e.target.value
			},
			bindPickerChange1: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.target.value)
				this.index1 = e.target.value1
			},
			bindMultiPickerColumnChange: function(e) {
				console.log('修改的列为：' + e.detail.column + '，值为：' + e.detail.value)
				this.multiIndex[e.detail.column] = e.detail.value
				switch (e.detail.column) {
					case 0: //拖动第1列
						switch (this.multiIndex[0]) {
							case 0:
								this.multiArray[1] = ['中国', '日本']
								this.multiArray[2] = ['北京', '上海', '广州']
								break
							case 1:
								this.multiArray[1] = ['英国', '法国']
								this.multiArray[2] = ['伦敦', '曼彻斯特']
								break
						}
						this.multiIndex.splice(1, 1, 0)
						this.multiIndex.splice(2, 1, 0)
						break
					case 1: //拖动第2列
						switch (this.multiIndex[0]) { //判断第一列是什么
							case 0:
								switch (this.multiIndex[1]) {
									case 0:
										this.multiArray[2] = ['北京', '上海', '广州']
										break
									case 1:
										this.multiArray[2] = ['东京','北海道']
										break
								}
								break
							case 1:
								switch (this.multiIndex[1]) {
									case 0:
										this.multiArray[2] = ['伦敦', '曼彻斯特']
										break
									case 1:
										this.multiArray[2] = ['巴黎', '马赛']
										break
								}
								break
						}
						this.multiIndex.splice(2, 1, 0)
						break
				}
				this.$forceUpdate()
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindTimeChange: function(e) {
				this.time = e.target.value
			}
			
		}
	}
</script>

<style>
body{
	background-color: #fff;
}
.uni-page-body {
    background-color: #F5F5F5;
}
.uni-common-pl{
color: #A4A9B0;
}

	.panel{
    background-color: #fff;
	    padding: 0.5rem;
	}
	.panel > view>view{
    display: inline-block;
	}
	.panel .num{
		color:#C1A846;
	}
	.panel>view{
		    margin-bottom: 0.3rem;			
	}
.charts {
	width: 750upx;
	height: 500upx;
	background-color: #ffffff;
}
.uni-title {
    font-size: 12px;
}
.item-title{
	    padding-left: 1rem;
	    height: 2.4rem;
	    line-height: 2.4rem;
	    background-color: #fff;
	    font-weight: bold;
}
.t-th{
    font-size: 12px;
	color:#878787;
}
.t-td{
	color:#333333;
	    font-size: 12px;
}
.uni-icons{
    font-weight: bold;
}
</style>
