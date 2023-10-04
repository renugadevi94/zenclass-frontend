import axios from "axios";

// export default axios.create({
//     baseURL: import.meta.env.VITE_BEURL,
// });

const api = axios.create({
    baseURL: import.meta.env.VITE_BEURL,
  });
  
//   // Add an Axios interceptor to set the Authorization header
  // api.interceptors.request.use(
  //   (config) => {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       config.headers.Authorization = `bearer ${token}`;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );
  
  export default api;
  
  
  
  
  
  
  
  
  