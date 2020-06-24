<template>
	<view>
		<!-- 表单组件 -->
		<view v-if="type == 'button'">		
			<button size="attribute_name.size" type="attribute_name.type" plain="attribute_name.plain" >按钮</button>
		</view>
		<view v-if="type == 'checkbox'">
			<checkbox-group>
				<label>
					<checkbox value="cb" checked="true" />选中
				</label>
				<label>
					<checkbox value="cb" />未选中
				</label>
			</checkbox-group>
		</view>
		
		
		<view v-if="type == 'input'"><input class="uni-input" focus placeholder="自动获得焦点" /></view>
		
		
		<view  v-if="type == 'picker'" class="uni-list">
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
		
		<!-- <button class="button" type="primary" @click="togglePopup('bottom', 'share')">底部分享</button>
	
		<uni-popup ref="showshare" :type="type1" @change="change">
			<view class="uni-share">
				<text class="uni-share-title">分享到</text>
				<view class="uni-share-content">
					<view v-for="(item, index) in bottomData" :key="index" class="uni-share-content-box">
						<view class="uni-share-content-image">
							<image :src="item.icon" class="content-image" mode="widthFix" />
						</view>
						<text class="uni-share-content-text">{{ item.text }}</text>
					</view>
				</view>
				<text class="uni-share-btn" @click="cancel('share')">取消分享</text>
			</view>
		</uni-popup> -->
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	
export default {
	name: 'page-foot',
	props: {
		type: {
			type: String,
			default: ''
		},
		attribute_name: {
			type: Object,
		}
	},
	components: {
		uniPopup
	},
	data(){
		return{
			index: 0,
			array: [{name:'中国'},{name: '美国'}, {name:'巴西'}, {name:'日本'}],
			
			
			type1: '',
			list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
			content: '顶部弹 popup',
			bottomData: [{
					text: '微信',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png',
					name: 'wx'
				},
				{
					text: '支付宝',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png',
					name: 'wx'
				},
				{
					text: 'QQ',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png',
					name: 'qq'
				},
				{
					text: '新浪',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png',
					name: 'sina'
				},
				{
					text: '百度',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png',
					name: 'copy'
				},
				{
					text: '其他',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png',
					name: 'more'
				}
			]
		}
	},
	methods: {
		submit() {
			uni.showModal({
				content: 'hello uni-app开源地址为https://github.com/dcloudio/uni-app/tree/master/examples，请在这个开源项目上贡献你的代码',
				showCancel: false
			});
		},
		togglePopup(type, open) {
			switch (type) {
				case 'top':
					this.content = '顶部弹出 popup'
					break
		
				case 'bottom':
					this.content = '底部弹出 popup'
					break
				case 'center':
					this.content = '居中弹出 popup'
					break
			}
			this.type = type
			this.$nextTick(() => {
				this.$refs['show' + open].open()
			})
		},
	}
};
</script>
<style>
.page-share-title {
	text-align: center;
	font-size: 30upx;
	color: #bebebe;
	padding: 20upx 0;
}

.submit {
	border-bottom: 1upx solid #bebebe;
}




/* 底部分享 */
	.uni-share {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		background-color: #fff;
	}

	.uni-share-title {
		line-height: 60rpx;
		font-size: 24rpx;
		padding: 15rpx 0;
		text-align: center;
	}

	.uni-share-content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 15px;
	}

	.uni-share-content-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		width: 200rpx;
	}

	.uni-share-content-image {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 60rpx;
		height: 60rpx;
		overflow: hidden;
		border-radius: 10rpx;
	}

	.content-image {
		width: 60rpx;
		height: 60rpx;
	}

	.uni-share-content-text {
		font-size: 26rpx;
		color: #333;
		padding-top: 5px;
		padding-bottom: 10px;
	}

	.uni-share-btn {
		height: 90rpx;
		line-height: 90rpx;
		font-size: 14px;
		border-top-color: #f5f5f5;
		border-top-width: 1px;
		border-top-style: solid;
		text-align: center;
		color: #666;
	}
</style>
