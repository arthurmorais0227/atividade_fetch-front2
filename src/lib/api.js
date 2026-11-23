import axios from 'axios';

const apiBaseUrl = (
    process.env.NEXT_PUBLIC_API_URL || 'https://hp-api.onrender.com'
).replace(/\/+$/, '');

const api = axios.create({
    baseURL: apiBaseUrl,
});

export default api;
