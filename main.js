import Vue from 'vue'
import App from './App'
import Store from './store/store.js'

Vue.config.productionTip = false
Vue.prototype.$store = Store

// 全局引入load的样式组件
import loader from './element/loading.vue';
Vue.component('loader',loader)

// 引用公共组件- 没数据显示
import nonedata from './element/none.vue'
Vue.component('nonedata', nonedata)

import homeload from './element/homeload.vue'
Vue.component('homeload',homeload)

// 引入animate css 动画
import animate from  'animate.css'
Vue.use(animate)




App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
