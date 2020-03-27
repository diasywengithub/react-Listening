// import axios from 'axios';
import axios from '../axios/index';
import qs from 'querystring';

/*     1.发送请求；
    2.捕捉异常；
    3.根据异常处理； */
const ajax = (url, data = {}, method = 'GET') => {
	return new Promise((resolve, reject) => {
		let promise;
		if (method === 'GET') {
			promise = axios._axios.get(url, { params: data });
		} else {
			console.log('ajax :');
			promise = axios._axios.post(url, qs.stringify(data) /* qs.stringify(data) */);
		}
		promise
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				console.log('error');
			});
	});
};
export default ajax;
