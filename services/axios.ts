import axios from "axios";

axios.interceptors.request.use(
  (conf) => {
    return conf;
  },
  (error: unknown) => {
    Promise.reject(error);
  }
);

export const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL}/api`,
});
