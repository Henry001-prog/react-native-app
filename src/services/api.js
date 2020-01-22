import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.whatsonchain.com/v1/bsv/main/woc',
});

export default api;