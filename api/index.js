import http from './request.js'

export default {
	login(param) {
		return http.post('/api/login', param)
	},
}