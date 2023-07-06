// 封装axios的post请求
import axios from 'axios'
export function fetch (url, params) {
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export default {
  mockdata (url, params) {
    return fetch(url, params)
  }
}
