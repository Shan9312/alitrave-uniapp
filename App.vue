<script>
	export default {
		onLaunch: function() {
			// 判断小程序是否能使用云开发
			if (!wx.cloud) {
				console.error('请使用 2.2.3 或以上的基础库以使用云能力');
			} else {
				wx.cloud.init({
					env: 'haoshanshan-mzxa0', // 云开发创建环境的 id 复制过来就行
					traceUser: true
				});
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	::-webkit-scrollbar{
		width: 0;
		height: 0;
		color: #FFFFFF;
	}
</style>
