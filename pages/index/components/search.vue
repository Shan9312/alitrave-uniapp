<template>
	<view>
		<!-- 搜索  引用svg图片-->
		<view class="search-content">
			<view class="search-code">
				<!-- mode :widthFix 标示100%展示 -->
				<image src="../../../static/tab/saoma.svg" mode="widthFix"></image>
			</view>
			<view class="search">
				<image src="../../../static/tab/sousuo.svg" mode="widthFix" class="search-img"></image>
				<input type="text" disabled placeholder="请输入文字" />
			</view>
			<view class="search-code">
				<image src="../../../static/tab/xiaoxi.svg" mode="widthFix"></image>
			</view>
		</view>
		<!-- 轮播 -->
		<view>
			<swiper
				:indicator-dots="true"
				:autoplay="true"
				:interval="3000"
				:duration="1000"
				:circular="true"
				indicator-color="rgba(255, 255, 255)"
				indicator-active-color="#00ff00"
			>
				<block v-for="item in banner" :key="item.id">
					<swiper-item>
						<view class="swiper-item" id="swiper-item" @click="localCont()">
							<image :src="item.image" mode="aspectFill" class="imageurl"></image>
						</view>
					</swiper-item>
				</block>	
			</swiper>
		</view>

	</view>
</template>

<script>
	export default {
		name: 'search',
		props:{
			banner:Array
		},
		data() {
			return {
			}
		}
	}
</script>

<style scoped lang="less">
	// upx == rpx /rem 
// 搜索栏
	.search-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 70upx;
		line-height: 70upx;
		background: linear-gradient(to top, #ffe566 10%, #ffd300);
		padding: 30upx 0;
	}

	.search-code {
		width: 50upx;
		height: 50upx;
		padding: 0 15upx;
	}

	.search-code image {
		width: 50upx;
		height: 50upx;
	}

	.search-img {
		width: 40upx;
		height: 40upx;
		margin: auto 0 auto 20upx;
	}

	.search {
		width: 100%;
		height: 70upx;
		line-height: 70upx;
		display: flex;
		flex-direction: flex;
		background: #fff7d4;
		border-top-left-radius: 50upx;
		border-bottom-left-radius: 50upx;
		border-bottom-right-radius: 50upx;
	}

	.search input {
		width: 100%;
		height: 70upx;
		line-height: 70upx;
		font-size: 30upx;
		color: #666666;
	}
// 轮播图
.imageurl{
	width: 100%;
	height:300upx!important ;
}
swiper{
	height: 300upx!important;
}
</style>
