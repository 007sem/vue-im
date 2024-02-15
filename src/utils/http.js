import axios from "axios";
import MyConfig from "@/config";
import router from "@/routes"; 


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
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
},
  (error) => {
      if (error.response && error.response.status === 401) {
        console.log("error", router)

        router.push("/login");
      }
  }
)


export default axiosInstance;
