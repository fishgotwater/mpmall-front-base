const http = {
	baseUrl: 'http://127.0.0.1:8000',
	request(config) {
		const newConfig = beforeRequest(config)
		newConfig.url = baseUrl + newConfig.url
		return new Promise((resolve, reject)=>{
			uni.request(newConfig).then(res=>{
				let [error, resp] = res
				const response = beforeResponse(resp)
				resolve(response)
			}).catch(err=>{
				errorHandle()
				reject(err)
			})
		})
	},
	get(url, data, auth) {
		return this.request({
			url: url,
			data: data,
			auth: auth,
			method: 'GET',
		})
	},
	post(url, data, auth) {
		return this.request({
			url: url,
			data: data,
			auth: auth,
			method: 'POST',
		})
	},
	delete(url, data, auth) {
		return this.request({
			url: url,
			data: data,
			auth: auth,
			method: 'DELETE',
		})
	},
	put(url, auth) {
		return this.request({
			url: url,
			auth: auth,
			method: 'PUT',
		})
	},
}

// 请求拦截器
const beforeRequest = (config) => {
	console.log('请求数据：', config)
	return config
}

// 响应拦截器
const beforeResponse = (response) => {
	console.log('响应数据：', response)
	return response
}

// 异常处理
const errorHandle = (error) => {
	console.log('异常处理：', error)
}

export default http