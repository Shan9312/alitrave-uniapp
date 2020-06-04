import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const  list = {
	listing:[],  // 首页推荐获取的数据列表
}

// tab 切换传值对象
const navObj = {
	loading:false,
	nav:'recommend',
	pageId:0,
	uniload: false,
}
// tab 切换穿值

// vuex 存储数据
const state = {
	list, 
	loading: '', // tab 切换的状态
	navObj,
	nonedata: '',
	city:'' // 城市跳转到攻略页面到路由参数
}

export default new Vuex.Store({
	state,
	actions:{
		listact(listact,data){
			listact.commit('listmut',data);
		}
	},
	mutations:{
		listmut(state,data){
			state.list = {
				listing: data,
			}
		},
		loadMut(state,val){
			state.loading = val;
		},
		navmuat(state,obj){
			state.navObj={
				loading: obj.loading,
				nav: obj.nav,
				pageId:obj.pageId,
				uniload: obj.uniload,
			}
		},
		nonemuat(state,val){
			state.nonedata = val;
		},
		citymuts(state,city){
			state.city= city;
			console.log(city,'vuex')
		},
	},
})