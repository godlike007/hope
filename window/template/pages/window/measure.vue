<template>
	<view>
		<view class="example-body">
			<uni-steps tap="test" :options="list1" active-color="#007AFF" :active="active" />
		</view>
		
		<view class="cur-status">
			<view class="block base">
				<view class="block-title">商品信息</view>
				<view class="block-content">
				<image mode="aspectFit" :src="detail.src"></image>
				<view class="content">
					<view class="content-title">{{detail.title}}</view>
					
					<view class="content-attr"><view>材质：</view>{{detail.val1}}</view>
					<view class="content-attr"><view>规格：</view>{{detail.val2}}</view>
					<view class="content-attr"><view>风格：</view>{{detail.val3}}</view>
					<view class="content-attr"><view>品牌：</view>{{detail.val4}}</view>
					<view class="content-attr"><view>颜色：</view>{{detail.val5}}</view>
					
				</view>
				</view>
			</view>
			
			<view class="block">
				<view class="block-title">客户信息</view>
				<view class="block-content">
					<view class="content-attr"><view>预约安装日期：</view>{{detail.val6}}</view>
					<view class="content-attr"><view>收货地址：</view>{{detail.val7}}</view>
					<view class="content-attr"><view>详细地址：</view>{{detail.val8}}</view>
					
				</view>
			</view>
			
			<view class="block">
				<view class="block-title">工人测量信息</view>
				<view class="block-content">
					<view class="content-attr"><view>长度：</view>{{detail.val9}}</view>
					<view class="content-attr"><view>高度：</view>{{detail.val0}}</view>
					<view class="content-attr"><view>计费面积：</view>{{detail.val1}}</view>
					<view class="content-attr"><view>预计人工费：</view>{{detail.val1}}</view>
				</view>
			</view>
			<view class="block">
				<view class="block-title">复尺信息</view>
				<view class="block-content">
				
				<form @submit="formSubmit" @reset="formReset">
					<view class="uni-form-item uni-column">
					
						<input class="uni-input" name="width" placeholder="请输入长度" />
					</view>
					<view class="uni-form-item uni-column">
						
						<input class="uni-input" name="height" placeholder="请输入高度" />
					</view>
					
					<view class="uni-form-item uni-column">
						<view class="title">*实际尺寸与业主测量差额¥100.00元，需客户进行补差价！</view>
						<radio-group name="difference">
							<label>
								<radio value="1" /><text>客户确定补差价</text>
							</label>
							<label>
								<radio value="2" /><text>误差较小，无需客户补差价</text>
							</label>
						</radio-group>
					</view>
					
					
					
					<drawing></drawing>
					<view class="uni-btn-v">
						<button form-type="submit">复尺完成</button>
					
					</view>
				
				</form>
				
				</view>
			</view>
			
			<!-- <view class="order-btn" @tap="done">
				复尺完成
			</view> -->
			
			
		</view>
		
	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	import drawing from '@/pages/API/image/drawing.vue'
	var  graceChecker = require("../../common/graceChecker.js");
	export default {
		components: {
			uniSection,
			uniSteps,
			drawing
		},
		data() {
			return {
				active: 1,
				list1: [{
					title: '待支付',
					desc: '2018-11-11'
				}, {
					title: '待测量',
					desc: '2018-11-13'
				}, {
					title: '待收货',
					desc: '2018-11-14'
				}, {
					title: '待安装',
					desc: '2018-11-15'
				}, {
					title: '已完成',
					desc: '2018-11-18'
				}],
				list2: [{
					title: '待支付',
					desc: '2018-11-11'
				}, {
					title: '待发货',
					desc: '2018-11-14'
				}, {
					title: '待收货',
					desc: '2018-11-15'
				}, {
					title: '已完成',
					desc: '2018-11-18'
				}],
				detail: {
					src: 'http://www.gdredoak.com/upload/201810/16/201810161616381484.jpg',
					title:'落地窗',
					val1: '断桥铝',
					val2: '断桥铝',
					val3: '欧式',
					val4: '凤铝',
					val5: '白色',
					
					val6: '2020-06-30',
					val7: '江苏省  苏州市  吴江区',
					val8: '千邑悦庭11栋305',
					
					val9: '长度',
					val0: '高度',
					val1: '计费面积',
					val2: '预计人工费',
				}
			}
		},
		methods: {
			change() {
				if (this.active < this.list1.length - 1) {
					this.active += 1
				} else {
					this.active = 0
				}
			},
			test(e){
				debugger;
			},
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			    //定义表单规则
			    var rule = [
			        
			        {name:"width", checkType : "notnull", checkRule:"",  errorMsg:"请填写宽度"},
					{name:"height", checkType : "notnull", checkRule:"",  errorMsg:"请填写高度"},
					//{name:"difference", checkType : "in", checkRule:"客户确定补差价,误差较小，无需客户补差价",  errorMsg:"请选择性别"},
			    ];
			    //进行表单检查
			    var formData = e.detail.value;
			    var checkRes = graceChecker.check(formData, rule);
			    if(checkRes){
			        uni.showToast({title:"验证通过!", icon:"none"});
			    }else{
			        uni.showToast({ title: graceChecker.error, icon: "none" });
			    }
			},
			formReset: function(e) {
				console.log('清空数据')
			},
			done: function(e) {
				console.log('清空数据')
			},
		}
	}
</script>

<style>
	

	.example-info-text {
		font-size: 14px;
		line-height: 20px;
		color: #3b4144;
	}


	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}

	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}


	.status-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 92rpx;
		margin: 30rpx;
		background-color: #007AFF;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		flex-direction: row;
	}
	
	
	
	
	uni-view{
		font-size: 12px;
	}
	image {
		width: 200rpx;
		height: 200rpx;
		margin: 0 30rpx;
	}
	.block{
		    padding: 20rpx;
		    background-color: #fff;
		    margin: 20rpx;
		    border-radius: 20rpx;
	}
	.block-title{
		font-weight: bolder;
		    margin-bottom: 20rpx;
	}
	.block-content{
		display: flex;
		flex-direction: column;
	}
	.base .block-content{
		display: flex;
		flex-direction: row;
	}
	
	.content{
		
	}
	.content-title{
		
	}
	.content-attr{
		    color: #9f9e9e;
		    float: left;
		    width: 80%;
	}
	.content-attr view{
		    float: left;
		        width: 30%;
		        text-align: right;
	}
	.base .content-attr{
		    width: 45%;
	}
	.base .content-attr view{
		    width: auto;
	}
	.order-btn{
	    width: 100%;
	    height: 90rpx;
	    position: fixed;
	    bottom: 0px;
	    text-align: center;
	    background-color: #FF5722;
	    color: #fff;
		line-height: 90rpx;
		font-size: 1rem;
	}
</style>