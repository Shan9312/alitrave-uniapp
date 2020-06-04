<template>
	<view class="content">
		<!-- 搜索栏 & 轮播图-->
		<Search :banner="banner"></Search>
		<!-- ticket 展示图 -->
		<Ticket ></Ticket>
		<!-- 表格classify -->
		<Classfiy></Classfiy>
		<!-- 滑动内容 -->
		<ScrollContent :class="{'is_fixed':isFixed}" id='content' :tab="tab"></ScrollContent>
		<!-- loading旋转的 -->
		<loader v-if="loadingShow"></loader>
		<!-- 底部的列表 -->
		<Article :article='article' v-else></Article>
		<!-- 若没数据则显示为空 -->
		<nonedata v-if="noneShow"></nonedata>
		<!-- 进入页面的加载 -->
		<homeload v-if="homeLoadShow"></homeload>
		<!-- 第三方 加载更多loading组件 -->
		<view class="load-more" v-if="loadmore">
			<uni-load-more :status="uniload" color="#ffcc99" ></uni-load-more>
		</view>
		
	</view>
</template>

<script>
	import Search from './components/search.vue'
	import Ticket from './components/ticket.vue'
	import Classfiy from './components/classify.vue'
	import ScrollContent from './components/scroll-content.vue'
	import Article from './components/article.vue'
	
	import { home, homeList } from '../../common/cloundfun.js' 
	import { mapState } from 'vuex'
	// 引用第三方上拉加载组件
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue" // 第3房引用插件loadmore
	

	export default {
		components: {
			Search,
			Ticket,
			Classfiy,
			ScrollContent,
			Article,
			uniLoadMore
		},
		data() {
			return {
				title: 'Hello',
				isFixed:false, // ScrollContent 组件页面滚动样式开关
				rect: 0, // 监听index页面滚动的距离
				menutop: 0, // 获取ScrollContent的距离高度
				banner:[], // 轮播数组
				tab:[], // ticket 组件数据
				article:[], // article 组件数据
				loadingShow: false, // tab切换时 loading的状态
				navLoading: false, // 上拉下载列表的loading
				nav: 'recommend', // tab 切换的初始值
				pageId:0, // 上拉加载list的列表页数量
				uniload: 'loading', 
				loadmore: false, // 隐藏上拉加载
				noneShow: false, // 若数据列表为空，则显示无数据提示
				homeLoadShow: true, // homeLoad组件显示
			}
		},
		created(){
			this.getDB(); // 获取轮播数据
		},
		// 计算属性 时刻监听数据的变化更改数值；
		computed:{
			// 时刻监听取出vuex 数控仓库的数据，展示页面
			...mapState(['list','loading','navObj','nonedata']),
			// 渠道tab 切换的数据
			count(){
				this.article= this.list.listing
			},
			// 获取loading的状态值
			countLoad(){
				this.loadingShow = this.loading;
			},
			// tab 的nav值
			navCheck(){
				this.navLoading= this.navObj.loading
				this.nav = this.navObj.nav;
				this.pageId = this.navObj.pageId;
				this.loadmore = this.navObj.uniload;
			},
			
			noneState(){
				this.noneShow = this.nonedata;
			},
			
			// 滑动组件置顶
			namepage() {
				if(this.rect > this.menutop){
					this.isFixed = true
				}else{
					this.isFixed = false
				}
			}
		},
		methods:{
			// 获取轮播数据
			getDB(){
				let banner ='banner';
				let tab = 'tab';
				let listing = 'recommend';
				// 并发批量请求数据：promise all 是等banner的数组和tab 的值都同时拿到后，才会同时渲染数据
				Promise.all([home(banner),home(tab),homeList(listing,this.pageId)]).then((res) =>{
					this.banner=res[0].data;
					this.tab = res[1].data;
					console.log(this.tab,'tab')
					this.article = res[2].data;
					this.homeLoadShow = false;
				})
			},
			
			// 上拉加载数据
			pullonPage(){
				console.log(this.nav,'9999')
				homeList(this.nav,this.pageId).then(res=>{
					// 数组合并方法
					// this.article = this.article.concat(res.data); // 方法一
					if(!res.data.length){
						this.uniload ='noMore';
					}else{
						this.article = [...this.article,...res.data]; // 方法二
					}
				})
			},
			
		},
		
		
		
		// 小程序生命周期函数 如下函数
		onLoad(){
			// 微信小程序 无window, 获取页面元素使用如下方法
			const query = wx.createSelectorQuery()
			query.select('#content').boundingClientRect()
			query.selectViewport().scrollOffset()
			query.exec(function(res){
			 // 显示滚动组件的竖直 滚动位置
			  this.menutop = res[0].top;
			});
		},
		// 页面生命周期-监听ScrollContent组件向上滑动的高度，然后让该组件定位在头部上；
		onPageScroll(e){
			this.rect = e.scrollTop;
		},
		// 生命周期-监听页面滚动
		onReachBottom(){
			// 上拉加载显示上拉加载组件
			this.loadmore= true;
			this.uniload ='loading';
			this.pageId++;
			this.pullonPage();
		}
		
		
	}
</script>

<style scoped>
	/* scrool-content 定位*/
	.is_fixed{position: fixed; left: 0; right: 0; top: 0;}
	/* 上拉加载的组件样式 */
	.load-more{
		height: 60upx;
		display: flex;
		justify-content: center;
	}
</style>
