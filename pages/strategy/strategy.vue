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
			<image src="../../static/tab/fab.png" mode="widthFix"  @click="travels"></image>
		</view>
	</view>
</template>

<script>
	import Address from './components/address.vue'
	import Locality from './components/locality.vue'
	import Content from './components/content.vue'
	import { addressData } from '../../common/unitl.js'
	import { mapState } from 'vuex'
	
	
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
				addressData:"",
			}
		},
		// 计算属性
		computed:{
			...mapState(['city']),
			count(){
				this.addressData = this.city;
			}
		},
		// 监听器
		// watch 会监听vuex中的值，若发送改变 会发送变化
		watch:{
			addressData(newVal,oldVal){
				this.address = newVal;
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
					this.address= '暂无无法获取定位';
				})
				
			},
			handleCity(){
				
			},
			// 跳到发表页面
			travels(){
				uni.navigateTo({
					url:'../travels/travels'
				})
			}
			
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
