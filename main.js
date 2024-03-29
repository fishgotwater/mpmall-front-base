import App from './App.vue'
import api from './api/index.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.prototype.$api = api
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({ ...App })
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.config.globalProperties.$api = api
	return {
		app
	}
}
// #endif
