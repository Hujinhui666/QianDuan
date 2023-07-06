// 相关依赖
// npm install webpack webpack-cli webpack-dev-server --save-dev
// mock/index.js
import Mock from 'mockjs'

Mock.mock('/api/users', 'get', {
  'list|10': [
    {
      'id|+1': 1,
      name: '@cname'
    }
  ]
})
