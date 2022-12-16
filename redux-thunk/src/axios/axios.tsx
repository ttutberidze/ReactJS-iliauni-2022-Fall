import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
axios.defaults.headers['Authorization'] = 'TestAuth';

export const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

export default axios;