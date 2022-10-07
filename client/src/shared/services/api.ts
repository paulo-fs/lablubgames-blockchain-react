import axios, { AxiosError } from 'axios';

const api = axios.create({
	baseURL: './Data/',
	headers: {
		'Content-Type': 'application/json',
		Accpect: 'application/json',
	},
});

api.interceptors.response.use(
	async (response) => {
		return response.data;
	},
	function(error: AxiosError){
		if(error.response){
			return Promise.reject(error.response);
		}
		return Promise.reject(error);
	});

export default api;