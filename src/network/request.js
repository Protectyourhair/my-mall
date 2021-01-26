import axios from 'axios';

export function request(config){
  //1、创建一个axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //2、axios拦截器
  //2.1  请求拦截
  instance.interceptors.request.use(config => {
    //拦截成功后还需要将结果返回
    return config
  },err => {
    console.log(err);
  })
  //2.2 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
  })
  //3、发送真正网络请求
  return instance(config)
}

