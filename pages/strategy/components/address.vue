<template>
	<view>
		<view class="address">
			<view class="address-img">
				<image src="https://img.alicdn.com/bao/uploaded/i3/2200538386031/O1CN01UzXSiL1uQFCqHg9r1_!!2200538386031.jpg_400x400.jpg" mode="aspectFill"></image>
			</view>
			<view class="address-list">
				<view class="address-text" @click="chooseCity()">
					<text class="words">{{address}}</text>
					<image src="../../../static/tab/jiantouxia.png" mode="widthFix"></image>
				</view>
				<text class="words-eng">hello</text>
			</view>
			<!-- 阴影 -->
			<view class="back"></view>
		</view>
		<!-- 机票 -->
		<view class="Plane"><image src="../../../static/tab/jipiao.png" mode="widthFix"></image></view>
	</view>
</template>

<script>
	
	export default {
		name:'address',
		props:{
			address:String
		},
		data() {
			return {}
		}
	}
</script>

<style scoped>
.address-text {
	display: flex;
	align-items: center;
}
.address-text image {
	width: 33upx;
	height: 33upx;
	padding-left: 30upx;
}
.address {
	position: relative;
	height: 400upx;
}
.address-list {
	position: absolute;
	left: 50upx;
	top: 100upx;
	z-index: 999;
}
.address-img {
	width: 100%;
	height: 400upx;
}
.address-img image {
	width: 750rpx !important;
	height: 400upx;
}
.words {
	font-size: 50upx;
	color: #ffffff;
	font-weight: bold;
}
.words-eng {
	font-size: 30upx;
	color: #ffffff;
}
.back {
	background: rgba(0, 51, 0, 0.3);
	position: absolute;
	top: 0;
	left: 0;
	height: 400upx;
	width: 100%;
}
/* 机票 */
.Plane image {
	width: 100%;
	border-radius: 20upx;
	height: 150upx;
}
.Plane {
	margin: 40upx 20upx;
	height: 150upx;
}
</style>
