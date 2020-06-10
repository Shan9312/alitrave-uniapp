<template>
	<view>
		<view class="myhome">
		<!-- 已登录 -->
			<block v-for="(item,index) in username" :key="index">
			<view class="wx-name" v-if="wxlofin">
				<view>
					<image :src="item.avatarUrl"></image>	
				</view>
				<view class="wx-text">
					<text>{{item.nickName}}</text>
					<text>领取会员</text>
				</view>
			</view>
			</block>
			<!-- 未登录 -->
			<view class="wx-button" v-if="!wxlofin">
				<view class="wx-button-view">登录生如夏花，开启旅程</view>
				<view>
					<button plain="true" open-type="getUserInfo" @getuserinfo="getUserInfo">去登录</button>
				</view>
			</view>
	</view>
	</view>
</template>

<script>
	var db = wx.cloud.database()
	var users = db.collection('user')
	// 引进公用登录js
	import {login} from '../../common/list.js'
	export default{
		name:"my",
		data() {
			return {
				wxlofin: false,
				username:[]
			}
		},
		
		methods:{
			getUserInfo(event){
				console.log(event)
				let user = event.detail.userInfo
				login(user)
				.then((res)=>{
					this.ifUser()
				})
				.catch((err)=>{
					console.log(err)
				})
			},
			
			
			// 请求数据库看看用户有没有登录
			ifUser(){
				users.get()
				.then((res)=>{
					console.log(res)
					if(res.data.length === 0){
						// 没有登陆过
						this.wxlofin = false
					}else{
						this.wxlofin = true
						this.username = res.data
					}
				})
				.catch((err)=>{
					console.log(err)
				})
			}
		},
		
		// 判断用户是否登录
		onShow() {
			console.log('123')
			// 请求数据库看看用户有没有登录
			this.ifUser()
		}
		
	}
</script>

<style scoped>
	.myhome{background: linear-gradient(to top, #ffe566 10%, #ffd300 100%); height: 350upx; display: flex; align-items: center;}
	.wx-name image{width: 120upx !important; height: 120upx !important; border-radius: 50%; margin-right: 20upx;
					border: 10rpx solid #999999;}
	text{display: block; margin: 10upx 0; color: #999999;}
	.wx-name{display: flex; align-items: center; padding: 0 30upx; align-content: center;
			height: 200upx;}
	.wx-text text:nth-child(1){font-size: 35upx;}
	.wx-text text:nth-child(2){font-size: 20upx; border: 1px solid #FFFFFF;
								padding: 7upx;
								border-radius: 50upx;
								text-align: center;}
	/* 登录 */
	.wx-button button{border: none;font-size: 30upx; background: linear-gradient(to right, #28a6f1 10%, #0e8dd7 80%);
	 border-radius: 50upx;
	color: #FFFFFF;}							
	.wx-button-view{font-size: 35upx; color: #FFFFFF; margin-bottom: 25upx;}
	.wx-button{margin: 0 auto;}
</style>
