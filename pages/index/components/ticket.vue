<template>
	<view>
		<view class="ticket">
			<block v-for="item in tab" :key="item.id">
				<view>
					<image :src="item.image" mode="widthFix"></image>
					<text>{{ item.name }}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'ticket',
		props:{
			tab:Array
		},
		data() {
			return {
				};
		}
	};
</script>

<style scoped>
	.ticket image {
		width: 90upx;
		height: 90upx;
	}

	.ticket {
		display: flex;
		justify-content: space-around;
		text-align: center;
		margin: 30upx 0;
	}

	.ticket text {
		font-size: 30upx;
		display: block;
	}
</style>
