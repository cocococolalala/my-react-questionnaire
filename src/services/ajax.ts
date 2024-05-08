import { message } from "antd";
import axios from "axios";

const instanse = axios.create({
  timeout: 10 * 1000,
});

//response拦截 统一处理errno和msg
instanse.interceptors.response.use((res) => {
  const resData = (res.data || {}) as responseType;
  const { errno, data, msg } = resData;

  if (errno !== 0) {
    //错误提示
    if (msg) {
      message.error(msg);
    }
    throw new Error(msg);
  }

  return data as any;
});

export default instanse;

export type responseType = {
  errno: number;
  data?: responseDataType;
  msg?: string;
};

export type responseDataType = {
  [key: string]: any;
};
