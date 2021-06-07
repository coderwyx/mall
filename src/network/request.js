import axios from 'axios'

export function request(config) {

  // 1.创建axios的实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  // 2.axios的拦截器

  // 2.1请求拦截
  instance.interceptors.request.use(config => {
    return config
  },err=> {

  })

  // 2.2响应拦截
  instance.interceptors.response.use(res= {
    return res.data
  },err=> {

  })

  return instance(config)
 
}