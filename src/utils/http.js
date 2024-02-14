import axios from "axios";
import MyConfig from "@/config";

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = MyConfig.BASE_URL;

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 从本地存储或其他地方获取 token
    const token = localStorage.getItem(MyConfig.TOKEN_NAME);

    // 如果存在 token，则在请求头中添加 Authorization 字段
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // 处理无权限访问的情况，例如跳转到登录页
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
