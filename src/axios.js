import axios from 'axios'
axios.defaults.baseURL = 'http://open.duyiedu.com'
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.params = {
    ...config.params,
    appkey: 'lbh123456789_1569378709998'
  }
  return config
}, function (error) {
  // 请求出错做什么
  return Promise.reject(error)
})
export default axios
