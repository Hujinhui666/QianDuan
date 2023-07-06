import count from './js/count'
import sum from './js/sum'
//想要webpack打包资源 必须引入该资源
import './css/iconfont.css'
import './css/index.css'
import './less/index.less'
import './sass/index.sass'
import './sass/index.scss'
import './stylus/index.styl'
import './mock/index.js'

console.log(count(2, 1))
console.log(sum(1, 2, 3, 4, 5))

import axios from 'axios'

// const getUsers = function () {

//   // Content-Type 响应头
//   axios.defaults.headers.post['Content-Type'] =
//     'application/x-www-form-urlencoded;charset=UTF-8'

axios
  .get('/api/users')
  .then(response => {
    return window.sessionStorage.setItem(
      'list',
      JSON.stringify(response.data.list)
    )

    // 在这里处理接口返回的模拟数据
  })
  .catch(error => {
    console.error(error)
  })
// }

// 2 axios 发起请求
