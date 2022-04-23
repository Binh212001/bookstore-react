import axios from "axios";

const AxiosConfig = axios.create({
  baseURL: "https://localhost:5001/api",
  headers: {
    "Content-Type": "application/json-patch+json",
    Accept: " text / plain",
  },
});

AxiosConfig.interceptors.response.use((res) => {
  return res.data;
});

AxiosConfig.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    config.headers.Accept = "*/*";
  }
  return config;
});

export default AxiosConfig;
