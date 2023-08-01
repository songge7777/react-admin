
import axios from "axios";


axios.defaults.timeout = 30000;
// 返回其他状态吗
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500; // 默认的
};
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = false;
const baseUrl = import.meta.env.VITE_BASE_URL;

// 拦截
axios.defaults.baseURL = baseUrl;
axios.interceptors.request.use(config => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers["Access-Token"] = accessToken;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// 拦截
axios.interceptors.response.use(config => {
  return config;
}, error => {
  return Promise.reject(new Error(error));
});

export default axios;
