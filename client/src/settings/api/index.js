import axios from 'axios';

export const apiServer = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000',
});
