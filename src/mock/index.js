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
Mock.mock('/api/tableData', 'get', {
  tableData: [
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    },
    {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }
  ]
})
