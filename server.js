// express 简单的模拟数据的服务器
// 安装一些需要的模块
// npm i express  webpack-dev-middleware

// webpack 模块  webpack.config.js

// 导入进来
let express = require('express')
let middle = require('webpack-dev-middleware')
let webpack = require('webpack')
let config = require('./config/webpack.dev')

let Mock = require('mockjs')

// 创建express 服务器
let app = express()

// 调用webpack 传入webpack配置文件 生成webpack编译对象
let compiler = webpack(config)

// 让app 去使用中间件
app.use(middle(compiler))

// 这里就可以去模拟一些接口
app.get('/api', (req, res) => {
  res.send(
    Mock.mock({
      msg: 'ok',
      'list|50': [
        {
          'id|+1': 1,
          name: '@cname',
          title: '@ctitle(2,5)',
          address: '@county(true)',
          email: '@email'
        }
      ]
    })
  )
})
app.post('/getList', (req, res) => {
  res.json({
    msg: 'ok',
    list: ['hello', '靠你其哇', '萨瓦迪卡', '撒浪嘿呦']
  })
})

app.listen(5000, () => {
  console.log('server is running at http:localhost:5000')
})
