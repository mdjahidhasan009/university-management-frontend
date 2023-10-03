import axios from 'axios';
import {getFromLocalStorage} from "@/utils/local-storage";
import {authKey} from "@/constants/storageKey";
import {IGenericErrorResponse, ResponseSuccessType} from "@/types";

const axiosInstance = axios.create();
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.post['Accept'] = 'application/json';
axiosInstance.defaults.timeout = 60000;

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  const accessToken = getFromLocalStorage(authKey);
  if(accessToken) {
    config.headers.Authorization = accessToken;
  }
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
//ts-ignore
axiosInstance.interceptors.response.use(function (response) {
  const responseObject : ResponseSuccessType = {
    data: response?.data?.data,
    meta: response?.data?.meta
  }
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return responseObject;
}, function (error) {
  const errorResponse: IGenericErrorResponse = {
    statusCode: error?.response?.data?.statusCode || 500,
    message: error?.response?.data?.message,
    errorMessages: error?.response?.data?.message || "Something went wrong"
  }
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axiosInstance;