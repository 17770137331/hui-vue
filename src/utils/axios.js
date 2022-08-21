import axios from 'axios';

const comBaseURL = '/admin'

const service = axios.create({
    timeout: 600000,
    baseURL: comBaseURL,
    // 允许携带cookie
    withCredentials: true,
})

export default service;