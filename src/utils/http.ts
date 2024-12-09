import axios from "axios";
import { useUserStore } from "@/stores/user";

export const http = axios.create({
  baseURL: "http://223.4.250.248:8080",
  timeout: 5000,
});
// 请求拦截器
http.interceptors.request.use(
  (config) => {
    const userStore = useUserStore();
    if (userStore.token !== "") {
      config.headers["Authorization"] = userStore.token;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// 响应拦截器
http.interceptors.response.use(
  (response) => {
    // if (response.data.code === 11401) {
    //   userStore.logout();
    //   window.location.href = "/";
    // }
    // 2xx 范围内的状态码触发该函数。
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
