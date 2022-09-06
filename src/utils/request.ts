import { Toast } from 'antd-mobile'
import axios, { AxiosError } from 'axios'

const instance = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0/',
  timeout: 5000
})

instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error: AxiosError<{ message: string }>) {
    if (!error.response) {
      Toast.show('网络繁忙，请稍后重试')
      return Promise.reject(error)
    }
    Toast.show(error.response.data.message)
    return Promise.reject(error)
  }
)


export default instance