import axios from 'axios';
import { Toast } from 'antd-mobile';

import { apiBaseUrl } from '../constant';

const http = axios.create({
  baseURL: apiBaseUrl,
  timeout: 30000,
});

// 请求拦截
http.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('token') || '';
    config.headers.Authorization = 'Bearer ' + token;
    return config;
  },
  (err) => {
    console.log(err);
  }
);

// 响应拦截
http.interceptors.response.use((response) => {
  let res = response.data;
  if (res.code === 0) {
    return res || {};
  } else if (res.code === -99 || res.code === -401) {
    // 跳转到登录页面
  } else {
    Toast.show({
      content: res.message || res.msg,
      duration: 2000,
    });
    return Promise.reject(res);
  }
});

export default http;
