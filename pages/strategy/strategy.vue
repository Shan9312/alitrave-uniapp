<template>
	<view>
		<Address></Address>
		<Locality></Locality>
		<Content></Content>
		<!-- 发表icon -->
		<view class="publish animated fadeInUp">
			<image src="../../static/tab/fab.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	import Address from './components/address.vue'
	import Locality from './components/locality.vue'
	import Content from './components/content.vue'
	// 引入SDK核心类
	var QQMapWX = require('../../common/qqmap-wx-jssdk.js');
	var qqmapsdk;
	
	export default{
		components:{
			Address,
			Locality,
			Content
		},
		data(){
			return{}
		},
		created(){
			this.addRess();
		},
		methods:{
			addRess(){
				   
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
