import axios from "axios";

const option = {
  baseUrl: "http://localhost:4004/api",
  withCredentials: true,
  timeout: 10000,
};

const API = axios.create(option);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { data, status } = error.response;
    return Promise.reject({
      ...data,
    });
  }
);

export default API;
