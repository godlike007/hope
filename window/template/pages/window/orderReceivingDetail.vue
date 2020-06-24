<template>
	<view>
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
			<view class="block-title">客户测量信息</view>
			<view class="block-content">
				<view class="content-attr"><view>长度：</view>{{detail.val9}}</view>
				<view class="content-attr"><view>高度：</view>{{detail.val0}}</view>
				<view class="content-attr"><view>计费面积：</view>{{detail.val1}}</view>
				<view class="content-attr"><view>预计人工费：</view>{{detail.val1}}</view>
			</view>
		</view>
		
		<view>	*以上尺寸信息为客户自行测量，最终费用依据现场复尺数据为准</view>
		
		<view class="order-btn" @tap="order">
			立即承接此订单
		</view>
		
	</view>
</template>
<script>
export default {
	data() {
		return {
			title: 'openLocation',
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
		};
	},
	methods: {
		openLocation: function(e) {
			console.log(e);
			var value = e.target.value;
			uni.openLocation({
				longitude: Number(value.longitude),
				latitude: Number(value.latitude)
				//name: value.name,
				//address: value.address
			});
		},
		order() {
			debugger;
			uni.showModal({
				content: '确定接单吗',
				confirmText: '确定',
				cancelText: '取消',
				success: function(res) {
					debugger;
					if (res.confirm) {						
						uni.navigateTo({
						    url: 'measure'
						});
						
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		}
	}
};
</script>

<style>
.uni-list-cell-left {
	padding: 0 30upx;
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
