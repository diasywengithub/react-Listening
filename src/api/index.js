import ajax from './ajax';
//后台API
let url = {
	// req: '/api'
	req: 'http://192.168.11.222:8888'
};

export const login = (data, method) => {
	return ajax(`${url.req}/web/user/login`, data, method);
};
