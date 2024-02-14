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
);

axios.interceptors.response.use(
  (response) => {
    console.log("response",response)
    return response;
},
  (error) => {
      console.log("error",error);
  }
)


export default axiosInstance;
