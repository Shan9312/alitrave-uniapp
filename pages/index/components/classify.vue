<template>
	<view>
		<!-- 表格 -->
		<view style="margin: 0 20upx;">
			<view class="conteng">
				<block v-for="(item, index) in tables" :key="index">
					<view>
						<text class="tick">{{ item.tick }}</text>
						<text class="nametext">{{ item.nametext }}</text>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'classify',
		data() {
			return {
				tables: [{
						tick: '出境游',
						nametext: '走遍全球'
					},
					{
						tick: '国内游',
						nametext: '精选路线'
					},
					{
						tick: '周边游',
						nametext: '暑假红包'
					},
					{
						tick: '精选购',
						nametext: '免税预购'
					},
					{
						tick: '签证/签注',
						nametext: '领劵'
					},
					{
						tick: '会员',
						nametext: '签到'
					},
					{
						tick: '每日福利',
						nametext: '领里程'
					},
					{
						tick: '全部',
						nametext: '更多推荐'
					}
				]
			};
		}
	};
</script>

<style scoped>
	/* 周边游 */
	.conteng {
		display: flex;
		flex-wrap: warp;
		width: 100%;
		-webkit-flex-wrap: wrap;
		overflow: hidden;
		border: 1rpx solid #eeeeee;
		border-radius: 10rpx;
	}

	.conteng view {
		width: 25%;
		flex-direction: column;
		align-items: center;
		display: flex;
		box-sizing: border-box;
		padding: 20upx 0;
	}

	.conteng view:nth-child(2) {
		border-left: 1rpx solid #eeeeee;
		border-right: 1rpx solid #eeeeee;
	}

	.conteng view:nth-child(6) {
		border-left: 1rpx solid #eeeeee;
		border-right: 1rpx solid #eeeeee;
	}

	.conteng view:nth-child(3) {
		border-right: 1rpx solid #eeeeee;
	}

	.conteng view:nth-child(7) {
		border-right: 1rpx solid #eeeeee;
	}

	.conteng view:nth-child(-n + 4) {
		border-bottom: 1rpx solid #eeeeee;
	}

	.tick {
		font-size: 30upx;
		color: #333333;
		font-weight: bold;
	}

	.nametext {
		font-size: 23upx;
		color: #686868;
	}
</style>
