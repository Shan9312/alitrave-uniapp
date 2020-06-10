<template>
	<view>
		<view class="travels">
			<!-- 分类 -->
			<view class="classify-view">
				<view class="classify-text">分类</view>
				<block v-for="(item,index) in fication" :key="index">
				<view class="classify">
					<text :class="{ activetext: index == num }" @click="menubtn(index,item.name)">{{item.name}}</text>
				</view>
				</block>
			</view>
			<!-- 标题 -->
			<view class="travels-title">
				<input type="text" placeholder="给旅行日记起个标题吧" class="place-text" v-model="titledata"/>
			</view>
			<!-- 描述 -->
			<view class="travels-describe">
				<textarea  placeholder="描述下你的旅行心得,帮助更多旅行的人" v-model="tipsdata"/>
			</view>
		</view>
		
		<!-- 上传图片 -->
		<view class="travels-image">
			<view class="topimg">
				<image src="../../static/tab/topimg.png" mode="widthFix" @click="uploadImg()"></image>
			</view>
			<!-- 九宫格 -->
			<view class="conteng">
				<block v-for="(item,index) in topimg" :key="index">
				<view class="conteng-img">
					<image :src="item" mode="aspectFill" class="uploadimg" @click="preImage(index)"></image>
					<image src="../../static/tab/deteimg.svg" mode="widthFix" class="deleteimg" @click="deleteImg(index)"></image>
				</view>
				</block>
			</view>
		</view>
		
		<!-- 上传视频 -->
		<view class="travels-video">
			<view class="topimg">
				<image src="../../static/tab/topvideo.png" mode="widthFix" @click="uploadVideo()"></image>
			</view>
			<view class="uploadvideo" v-if="uploadvideos">
				<video :src="videos" controls objectFit="cover" poster="http://h.thexxdd.cn/video/postimage.jpg"></video>
				<image class="pause" src="../../static/tab/delvideo.png" @click="deleteVideo()"></image>
			</view>
		</view>
		
		<!-- 定位 -->
		<view class="address">
			<view class="address-text">你在哪里</view>
			<view class="address-site">
				<image src="../../static/tab/addimg.svg" mode="widthFix"></image>
				<text @click="chooseCity()">{{address}}</text>
			</view>
		</view>
		
		
		<!-- 发布 -->
		<view class="release" @click="suBmitd()">
			发布
		</view>
		<!-- 及时反馈组件 -->
		<HMmessages ref="HMmessages" @complete="HMmessages = $refs.HMmessages" @clickMessage="clickMessage"></HMmessages>
		
		<!-- 登录模态框 -->
		<motal ref="mon"></motal>
		<!-- 提示用户上传成功与否 -->
		<view class="warp" v-if="relend">
			<view class="warp-view tipmin">
				<text>{{reldata}}</text>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import {previewImg,addressData} from '../../common/unitl.js'
	import HMmessages from "@/components/HM-messages/HM-messages.vue"
	import motal from '../../element/modal.vue' // 
		
	export default{
		data(){
			return {
					num:0,
					fication: [
						{
							"name":'景点'
						},
						{
							"name":'美食'
						},
						{
							"name":'网红打卡'
						}
					],
			
					uploadvideos:false,
					watchaddress:'',
					classdata:'景点',  //分类
					titledata:'',   //标题
					tipsdata:'',   //描述
					topimg:[],   //上传的图片
					videos:'',  //上传的视频
					address:'', //选择的城市
					avatarUrl:'', // 用户头像
					nickName:'', // 用户昵称
					openid :''	,// 用户openid
					// 提示用户正在发布
					reldata:'正在发布...请勿关闭该页面',
					relend:false
					
					
				}
		},
		components:{
			motal
		},
		mounted(){
			this.addRess()
		},
		methods:{
			// 点击发布
			suBmitd(){
				// 判断用户是否登录，登录再提交
				this.userinfo();
			},
			// 判断用户是否登录
			userinfo(){
				let db = wx.cloud.database()
				let users = db.collection('user')
				// 请求数据库查看用户是否存在，存在就是登陆，反之未登录
				users.get()
				.then((res)=>{
					console.log(res)
					// length == 0说明用户没有登录
					if(res.data.length == 0){
						console.log('没有登录')
						// 弹出模态框
						let message = '请登录后再操作'
						this.$nextTick(()=>{   //dom更新循环结束之后的延迟回调
							this.$refs.mon.init(message)
						})
						
					}else{
						console.log('已经登陆')
					}
				})
				.catch((err)=>{
					console.log(err)
				})
			},
			// 上传图片
			uploadImg(){
				uni.chooseImage({
				    count: 9, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success:  (res)=> {
						console.log(res.tempFilePaths);
						if(this.topimg.length >=9){
							return 
						}else{
							this.topimg.push(...res.tempFilePaths);
						}
						
				    }
				});
			},
			// 删除图片
			deleteImg(index){
				this.topimg.splice(index,1);
			},
			
			// 预览图片
			preImage(index){
				previewImg(index,this.topimg).then(res=>{
					console.log(res,'preimg')
				})
			
			},
			
			// 上传视频
			uploadVideo(){
				uni.showLoading({
				    title: '视频加载中'
				});
				uni.chooseVideo({
				   count: 1, // 数量
				   sourceType: ['camera', 'album'],
				   
				   maxDuration: 20, // 拍摄视频最长拍摄时间，单位秒。最长支持 20 秒
				  
			   }).then(res=> {
					   console.log(res);
					    this.videos= res[1].tempFilePath;
						this.uploadvideos =true;
				   }).catch(err =>{
					    console.log(err,'err');
				   })
			},
		
		// 删除视频
		deleteVideo(){
		  this.videos = ''
		  this.uploadvideos = false
		},
		
		// 定位
		addRess(){
			addressData().then(res=>{
				console.log(res)
				this.address = res.result.ad_info.city;
			});
		},
	    // 选择城市
		chooseCity(){
			uni.navigateTo({
				url:'../city/city'
			})
		},
		rouTes(city){
			this.$store.commit('citymuts',city)
			uni.navigateBack({
				 delta: 1
			})
		},
	 },
	}
</script>

<style scoped>
	.travels{padding: 10upx 20upx;}
	.classify text{display: block; font-size: 27upx; color: #14181e; background: #f7f7f7;
		padding: 10upx 20upx; border-radius: 20upx;
		margin: 0 30upx;}
		.classify{display: flex;}
		.classify-text{font-size: 30upx; color: #14181e; font-weight: bold;}
		.classify-view{display: flex; justify-content: flex-start; align-items: center;}
		/* 选中的样式 */
		.activetext{background: #ffdd00 !important;}
	/* 标题 */
	.place-text{color: #808080 !important; font-size: 30upx;}
	.travels-title{margin: 40upx 0;}	
	/* 描述 */
	.travels-describe textarea{width: 100%; color: #808080 !important; font-size: 30upx;}
	/* 上传图片 */
	.topimg image{width: 150upx; height: 150upx; border-radius: 20upx;}
	.topimg{padding-left: 20upx; padding-top: 10upx;}
	/* 九宫格 */
	.conteng{display: flex; flex-wrap: wrap;
	margin-left: 4px; margin-right: 4px;}
	.conteng-img{width: calc((100% / 4) - 8px) !important;
	margin: 4px;
	height: 176upx;
	position: relative;
	}
	.uploadimg{width: 100% !important;
	height: 100% !important;
	border-radius: 10upx;}
	/* 删除图片 */
	.deleteimg{width: 38upx; height: 38upx;
	position: absolute;
	top: 6upx;
	right: 6upx;}
	/* 视频 */
	.uploadvideo video{width: 100%; height: 400upx; border-radius: 5upx;}
	.uploadvideo{margin: 0 8px; border-radius: 5upx; position: relative;}
	/* 覆盖视频 */
	.pause{width: 50upx; height: 50upx; position: absolute; top: 6upx; right: 6upx;}
	/* 位置 */
	.address-site{display: flex; align-items: center;}
	.address-site image{width: 40upx; height: 40upx; margin-right: 10upx;}
	.address-site text{font-size: 30upx; color: #00a2ff;}
	.address-text{font-size: 30upx; color: #333333; padding-right: 40upx;}
	.address{display: flex; background: #f1f1f1; padding: 20upx 0 20upx 20upx; margin-top: 30upx;
			margin-bottom: 160upx;}
	/* 发布 */
	.release{background: #ffdd00; width: 100%;height: 100upx;
	font-size: 40upx;
	line-height: 100upx;
	text-align: center;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 999;}
	/* 提示用户上传成功与否 */
	.warp{position: fixed;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background: rgba(0,0,0,0.6);
			z-index: 9999;}
			.warp-view{width: 500upx;
					height: 200upx;
					background: #FFFFFF;
					margin: auto;
					position: absolute;
					-webkit-position:absolute;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;
					border-radius: 8upx;
					overflow: hidden;
					}	
			/* 提示框 */
			.tipmin text{font-size: 34upx;
			display: flex;
			justify-content: center;
			line-height: 200upx;
			}
</style>

