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
						</view>
							<view class="purchase userinfo">
								<image :src="item.nameimg" mode=""></image>
								<text class="active-purchase">{{item.name}}人已购</text>
							</view>
					</view>
					</block>
				</view>
			</view> 
</template>

<script>
	export default{
		name:'content',
		data(){
			return{
				article:[
					{
						image:"cloud://haoshanshan-mzxa0.6861-haoshanshan-mzxa0-1300953113/list/c2.jpg",
						title:"hss",
						list:"上海很好玩henhwhhwhwhwhwhhw",
						nameimg:'cloud://haoshanshan-mzxa0.6861-haoshanshan-mzxa0-1300953113/list/d3.webp',
						name:'昆明',
					},
					{
						image:"cloud://haoshanshan-mzxa0.6861-haoshanshan-mzxa0-1300953113/list/c2.jpg",
						title:"hss",
						list:"上海很好玩henhwhhwhwhwhwhhw",
						nameimg:'cloud://haoshanshan-mzxa0.6861-haoshanshan-mzxa0-1300953113/list/d3.webp',
						name:'昆明',
					},
					{
						image:"cloud://haoshanshan-mzxa0.6861-haoshanshan-mzxa0-1300953113/list/c2.jpg",
						title:"hss",
						list:"上海很好玩henhwhhwhwhwhwhhw",
						nameimg:'cloud://haoshanshan-mzxa0.6861-haoshanshan-mzxa0-1300953113/list/d3.webp',
						name:'昆明',
					},
					{
						image:"cloud://haoshanshan-mzxa0.6861-haoshanshan-mzxa0-1300953113/list/c2.jpg",
						title:"hss",
						list:"上海很好玩henhwhhwhwhwhwhhw",
						nameimg:'cloud://haoshanshan-mzxa0.6861-haoshanshan-mzxa0-1300953113/list/d3.webp',
						name:'昆明',
					},
					{
						image:"cloud://haoshanshan-mzxa0.6861-haoshanshan-mzxa0-1300953113/list/c2.jpg",
						title:"hss",
						list:"上海很好玩henhwhhwhwhwhwhhw",
						nameimg:'cloud://haoshanshan-mzxa0.6861-haoshanshan-mzxa0-1300953113/list/d3.webp',
						name:'昆明',
					},
					{
						image:"cloud://haoshanshan-mzxa0.6861-haoshanshan-mzxa0-1300953113/list/c2.jpg",
						title:"hss",
						list:"上海很好玩henhwhhwhwhwhwhhw",
						nameimg:'cloud://haoshanshan-mzxa0.6861-haoshanshan-mzxa0-1300953113/list/d3.webp',
						name:'昆明',
					},
				]
			}
		}
	}
</script>

<style scoped>
	/* 引入公用样式 */
	@import url("../../../common/uni.css");
	.userinfo image{
		height: 50upx;
		width:50upx;
		border-radius:50upx ;
	}
	.userinfo text{
		padding-left: 20upx;
	}
	.userinfo{
		padding-top: 20upx;
	}
</style>
