<template>
	<view>
		<view>
			云开发增删改查
			<view>查询到free数据库：{{ list[0].title}}</view>
			<!-- form 表单 -->
			<view>
			            <form @submit="formSubmit" @reset="formReset">
							<view class="uni-form-item uni-column">
								<view class="title">你的姓名</view>
								<input class="uni-input" name="input" type="text" v-model="reluForm.name" placeholder="这是一个输入框" />
							</view>
							<view class="uni-form-item uni-column">
								<view class="title">你的年龄</view>
								<input class="uni-input" name="input" type="number" v-model="reluForm.age" placeholder="这是一个输入框" />
							</view>
							<view class="uni-form-item uni-column">
								<view class="title">性别</view>
								<radio-group name="radio" @change="handleCheckout">
									<label>
										<radio value="1" /><text>女</text>
									</label>
									<label>
										<radio value="2" /><text>男</text>
									</label>
								</radio-group>
							</view>
							<view class="uni-btn-v">
								<button form-type="submit">提交信息</button>
								<button form-type="formReset">重置</button>
							</view>
						</form>
					</view>
		</view>
		<view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				reluForm:{},
			}
		},
		// 生命周期函数
		onLoad(){
			// 数据库 查询free 表，查询title 有xx值都数据，返回数组；
			const db =wx.cloud.database();
			const banner= db.collection('free');
			// ******** 查找数据 where
			// banner.where({
			// 	title:'亲子蜜月旅游机票'
			// }).get().then(res=>{
			// 	this.list = res.data;
			// }).catch(err=>{
			// 	console.log(err);
			// })
			//********* 插入数据 add
			// banner.add({
			// 	data:{
			// 		_id:"789",
			// 		buy:520,
			// 		// id:7,
			// 		image:"cloud://haoshanshan-mzxa0.6861-haoshanshan-mzxa0-1300953113/list/b1.jpg",
			// 		label:'闪闪测试插入一条新数据',
			// 		list:'hss',
			// 		price:888,
			// 		title:"插入新数据"
			// 	}
			// }).then(res=>{
			// 	console.log(res,'add')
			// }).catch(err=>{
			// 	console.log(err)
			// })
			//********** 局部更新数据 update
			// banner.doc('888').update({
			// 	data:{
			// 	   title:'更新数据啦',
			// 	}
			// }).then(res=>{
			// 	console.log(res,'update')
			// }).catch(err=>{
			// 	console.log(err)
			// });
			//*********** 更新更多数据 set
			// banner.doc('888').set({
			// 	data:{
			// 		// _id:"788",
			// 		buy:521,
			// 		id:8,
			// 		image:"cloud://haoshanshan-mzxa0.6861-haoshanshan-mzxa0-1300953113/list/b1.jpg",
			// 		label:'闪闪',
			// 		list:'hss',
			// 		price:879,
			// 		title:"shanshans插入新数据"
			// 	}
			// }).then(res=>{
			// 	console.log(res,'set')
			// }).catch(err=>{
			// 	console.log(err)
			// });
			// *********** 删除数据 remove
			// banner.doc('789').remove({}).then(res=>{
			// 	console.log(res,'remove')
			// })
		},
		methods: {
			formSubmit: function(e) {
						console.log(this.reluForm,'ruleform')
						// 给 userList 表 插入用户信息
						const db =wx.cloud.database();
						const user= db.collection('userList');
						user.add({
							data:this.reluForm
						}).then(res=>{
							console.log(res,'用户信息')
						})
						wx.showToast({
							title:'提交成功',
							duration:2000,
							
						})
						
						
					},
					handleCheckout(val){
						this.reluForm.sex=val.detail.value;
					},
		}
	}
</script>

<style lang="less" scoped>
.uni-form-item .title {
     padding: 20rpx 0;
}
</style>
