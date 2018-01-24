/**
 * Created by yanhaoqi on 2018/1/24.
 */
import axios from 'axios'
export default {
  get: (url, options) => {
    let abort = null
    const abortPromise = new Promise((resolve, reject) => {
      abort = () => {
        reject('http abort')
      }
    })
    const httpPromise = axios.get(url, options)
    const promise = Promise.race([abortPromise, httpPromise])
    promise.abort = abort
    promise.catch((d) => {

    })
    return promise
  },
  post: (url, options) => {
    if (options) {
      var params = new (URLSearchParams || FormData)();
      params.append('param', JSON.stringify(options))
      return axios.post(url, params)
    } else {
      return axios.post(url)
    }

  }
}
