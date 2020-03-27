import axios from 'axios';
let baseUrl = 'http://192.168.11.222:8888',
	axiosConfig = {
		baseUrl,
		timeout: 1000,
		headers: {
			// 'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		}
	};
let instanceTmp = axios.create(axiosConfig);
export default {
	_axios: instanceTmp,
	getCancelToken: axios.CancelToken
};
