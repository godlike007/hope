<template>
	<view>
		<page-head title="选部件"></page-head>
		<view class="uni-padding-wrap uni-common-mt">

			
			<view class="bike-wrap">
				<view class="cycle-outer">
							<view class="cycle-wrapper">
								<view class="cycle-body">
									<view class="seat">
										<span></span>
									</view>
									<view class="front-wheel-frame"></view>
									<view class="top-frame"></view>
									<view class="front-frame">
										<view class="bottle-holder">
											<span></span>
										</view>
									</view>
									<view class="center-frame"></view>
									<view class="back-frame"></view>
									<view class="bottom-frame"></view>
									<view class="handlebar-front"></view>
									<view class="handlebar-curve"></view>
								</view>
								<view class="cycle-wheel cycle-wheel-back">
									<view class="cycle-wheel-outer">
										<view class="cycle-wheel-inner">
											<view class="cycle-wheel-inner-padding">
												<ul class="spoke-container">
													<li class="spoke"></li>
													<li class="spoke"></li>
												</ul>
												<view class="inner-disc"></view>
												<view class="inner-disc-2"></view>
											</view>
										</view>
									</view>
								</view>
								<view class="cycle-wheel cycle-wheel-front">
									<view class="cycle-wheel-outer">
										<view class="cycle-wheel-inner">
											<view class="cycle-wheel-inner-padding">
												<ul class="spoke-container">
													<li class="spoke"></li>
													<li class="spoke"></li>
												</ul>
												<view class="inner-disc"></view>
												<view class="inner-disc-2"></view>
											</view>
										</view>
									</view>
								</view>
								<view class="chain-up"></view>
								<view class="chain-bottom"></view>
								<view class="chain-rotation">
									<view class="outer-axle"></view>
									<view class="chain-disc-outer">
										<view class="chain-disc-inner"></view>
									</view>
									
								</view>
								<view class="chain-rods">
									<view class="pedal-rod"></view>
								</view>
							</view>
						</view>
				
			</view>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
					<view id="demo1" class="scroll-view-item_H uni-bg-red">A</view>
					<view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
					<view id="demo3" class="scroll-view-item_H uni-bg-blue">C</view>
					
					
				</scroll-view>
			</view>
            <view class="uni-common-pb"></view>
		</view>
		
		
		
	</view>
</template>
<script>
	 
	
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		methods: {
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon:"none",
					title:"纵向滚动 scrollTop 值已被修改为 0"
				})
			}
		}
	}
</script>

<style>
	@import 'bike.css';
	.scroll-Y {
		height: 300upx;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item {
		height: 300upx;
		line-height: 300upx;
		text-align: center;
		font-size: 36upx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
		font-size: 36upx;
	}
	
	
	.bike-wrap{
		height:400px;
		display:none;
	}
</style>