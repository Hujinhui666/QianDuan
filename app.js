let express = require('express');

let middle = require('webpack-dev-middleware');
let config = require('./config/webpack.dev.js');
let Mock = require('mockjs');
const webpack = require('webpack');
let app = express(); 
app.use(function(req, res, next) { res.header("Access-Control-Allow-Origin", "*");
res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS'); 
res.header("Access-Control-Allow-Headers", "X-Requested-With"); 
res.header('Access-Control-Allow-Headers', 'Content-Type'); next(); }); 
// //实例化express
app.use('/mode2/DataOne',function(req, res){ res.json(Mock.mock({ 'status': 200, 'dataSource|1-9':[{ 'key|+1': 1, 'mockTitle|1':['000'], 'mockContent|1': ['222', '333', '444', '555', '666'], 'mockAction|1': ['aaa', 'bbb', 'ccc'] }] })) })
 

// let compiler = webpack(config);
// app.use(middle(compiler));
// app.get('/api/aa',(req,res)=>{
//     res.send(Mock.mock({
//         "list|50":[
//             {
//                 "id|+1":1,
//                 "name": "@cname",
//                 "title": "@ctitle(4,8)",
//                 "address": "@county(true)",
//                 "desc": "@cword(20)",
//                 "img": "@image()"
//             }
//         ]
//     }))
// })
// app.post('/getGoods',(req,res)=>{
//     res.send(Mock.mock({
//         "list|10":[
//             {
//                 "id|+1":1,
//                 "name": "@cname",
//                 "desc": "@paragraph()",
//             }
//         ]
//     }))
// })

// 侦听端口
app.listen(8000,()=>{
    console.log('server is running at http://localhost:8000')
})