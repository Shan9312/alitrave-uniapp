<template>
<view class="active">
			<view class="conteng">
				<block v-for="(item,index) in article" :key="index">
				<view class="conteng-article">
					<view  class="conteng-img">
					<image :src="item.image" mode="aspectFill"></image>	
					</view>
					<!-- 文字介绍 -->
					<view class="active-introduce">
						<view class="active-name">{{item.title}}</view>
						<view class="active-title">{{item.list}}</view>
						<view class="active-label">{{item.label}}</view>
						<view class="purchase">
							<text class="active-price">￥{{item.price}}</text>
							<text class="active-purchase">{{item.buy}}人已购</text>
						</view>
					</view>
				</view>
				</block>
			</view>
		</view> 
</template>

<script>
	export default {
		name:"article",
		props:{
			article:Array
		},
		data(){
			return{
			}
		}
	}
</script>

<style scoped>
 /* 引入公用样式 */
 @import url("../../../common/uni.css");
</style>
