<template>
	<view>
		<scroll-view scroll-x="true" class="scroll" scroll-with-animation="true">
			<view>
				<block v-for="(item, index) in tab" :key="index">
					<view  class="list-cont" @click="tabs(index,item.nav)" :class="{active: index == num}">
						<view>
							<text  class="con-text-a">{{ item.name}}</text>
						</view>
						<view>
							<text  class="con-text-b" :class="{activeb: index == num}">{{ item.title }}</text>
						</view>
					</view>
				</block>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { homeList} from '../../../common/cloundfun.js'
	
	export default{
		name:"tab",
		props:{
			tab:Array,
		},
		data() {
			return {
				num:0,
			}
		},
		methods:{
			tabs(index,nav){
				let loading = true;
				this.$store.commit('loadMut',loading);
				this.$store.commit('nonemuat',false);
				this.num = index;
				let obj ={
					loading:true,
					nav:nav,
					pageId:0,
					uniload:false,
					
				}
				this.$store.commit('navmuat',obj)
				homeList(nav,0).then(res=>{
					
					// 若返回都列表 为空，则显示无数据组件
					if(res.data.length){
						this.article = res.data;
						this.$store.commit('nonemuat',false);
					}else {
						this.$store.commit('nonemuat',true);
					}
					//  把tab 切换的nav 存储到vuex中，其他组件能拿到值
					loading = false;
					this.$store.commit('loadMut',loading);
					this.$store.dispatch('listact',res.data);
					
				}).catch(err=>{
					console.log(err)
				});
			}
		}
	}
</script>

<style scoped>
	.active {
		background-image: linear-gradient(to right, #ccffff 0%, #ffcc00 100%);
		border-top-right-radius: 50upx;
	}
	.activeb {
		color: #292c33 !important;
	}
	.scroll{ white-space: nowrap;
		width: 100%;
		position: absolute; left: 0; right: 0;
		background: #FFFFFF;
		padding: 20upx 0;
		}
		
	.con-text-a {
		color: #292c33;
		font-size: 30upx;
		font-weight: bold;
	}
	.con-text-b {
		color: #9ea0a5;
		font-size: 23upx;
	}
	.list-cont {
		width: 180upx;
		display: inline-block;
		text-align: center;
	}

	
</style>
