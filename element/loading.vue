<template>
	<view>
		<view class="loading">
			<view class="loader"></view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.loading{
		display: flex;
		justify-content: center;
		padding: 30upx 0;
	}
	.loader{
		display: inline-block;
		width: 40upx;
		height: 40upx;
		color: inherit;
		border:7upx solid greenyellow;
		border-bottom-color: transparent;
		border-radius: 50%;
		animation: 1s loader linear infinite;
	}
	/* 360度选转 */
	@keyframes loader{
		0%{
			transform: rotate(0deg);
		}
		100%{
			transform: rotate(360deg);
		}
	}
</style>
