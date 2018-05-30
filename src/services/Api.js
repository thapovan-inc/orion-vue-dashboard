import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 30000
});

api.interceptors.response.use(response => response);


export default api;
