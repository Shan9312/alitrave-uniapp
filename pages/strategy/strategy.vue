<template>
	<view>
		<!-- 获取用户定位城市 -->
		<Address :address="address" @click='handleCity'></Address>
		<!-- tab切换 -->
		<Locality></Locality>
		<!-- 切换时展示的loading -->
		<loader v-if="loadingShow"></loader>
		<!-- 获取不同的列表数据 -->
		<Content></Content>
		<!-- 发表 + icon -->
		<view class="publish animated fadeInUp">
			<image src="../../static/tab/fab.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	import Address from './components/address.vue'
	import Locality from './components/locality.vue'
	import Content from './components/content.vue'
	import { addressData } from '../../common/unitl.js'
	
	export default{
		components:{
			Address,
			Locality,
			Content
		},
		data(){
			return{
				loadingShow: false,
				address:"", // 用户地址
			}
		},
		created(){
			// 使用腾讯服务定位
			this.addRess();
		},
		methods:{
			addRess(){
				// 定位
				addressData().then((res)=>{
					this.address= res.result.ad_info.city;
				}).catch(err=>{
					this.address= '北京市';
				})
				
			},
			handleCity(){
				
			},
			
		}
	}
</script>

<style scoped>
	.publish image{
		width: 120upx !important;
		height: 100upx !important;
		border-radius:40upx;
	}
	.publish{
		position: fixed;
		bottom: 20upx;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
	}
</style>
