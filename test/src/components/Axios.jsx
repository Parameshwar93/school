import axios from 'axios';

// const baseURL = 'http://192.168.56.1:8000/core/';
const baseURL = 'http://13.201.147.189:8000/core/';
// const baseURL = 'http://127.0.0.1:8000/core/';

const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		Authorization: localStorage.getItem('access_token')
			? 'JWT ' + localStorage.getItem('access_token')
			: null,
		'Content-Type': 'application/json',
		accept: 'application/json',
	}, 
});

export default axiosInstance;