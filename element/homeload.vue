<template>
	<view class="homeload">
		<view class="home-img">
			<image src="../static/tab/homeload.svg" mode=""></image>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	
	.homeload{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999;
		overflow: hidden;
		background: rgba(242,243,244,0.6);
	}
	.home-img{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.home-img image{
		width: 200upx;
		height: 200upx;
		background: rgb(0,0,0,0.2);
		border-radius:10upx ;
	}
</style>
