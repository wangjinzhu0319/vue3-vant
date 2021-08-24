import axios from 'axios'
import { showLoadingFun, hideLoadingFun, serialize, toastFun } from './util'
axios.defaults.timeout = 1000000
// HTTPrequest拦截
axios.interceptors.request.use(
  config => {
    showLoadingFun()
    const meta = config.meta || {}
    // headers中配置serialize为true开启序列化
    if (config.method === 'post' && meta.isSerialize === true) {
      config.data = serialize(config.data)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  res => {
    hideLoadingFun()
    const message = res.data.msg || res.data.message || '未知错误'
    if (res.status === 200) {
      return Promise.resolve(res)
    } else {
      toastFun(message, 'fail')
      return Promise.reject(res)
    }
  },
  error => {
    hideLoadingFun()
    const message = error.response.data.msg || error.data.message || '未知错误'
    toastFun(message, 'fail')
    return Promise.reject(new Error(error))
  }
)

export default axios
