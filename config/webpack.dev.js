const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const path = require('path');

module.exports = {
  //模式
  mode: 'development',
  //入口
  entry: './src/main.js', //相对路径
  //输出
  output: {
    //文件的输出路径(所有文件的输出目录)
    //__direname:代表当前文件夹目录
    // path:path.resolve(__dirname,"../dist"),//绝对路径
    //开发模式没有输出
    path: undefined,
    //文件名
    filename: 'static/js/main.js',
    //自动清空上次打包结果
    //原理：在打包前 将path整个目录清空，再进行打包
    clean: true
  },
  //加载器
  module: {
    rules: [
      //loader的配置
      {
        test: /\.css$/, //只检测xxx文件(正则)
        use: [
          //执行顺序 从右到左（从下到上）
          'style-loader', //将js中css添加到index页面style属性中
          'css-loader' //将css资源编译成commonjs的模块到js中
        ]
      },
      {
        test: /\.less$/,
        // loader:只能使用一个loader
        use: [
          //使用多个loader
          'style-loader',
          'css-loader',
          'less-loader' //将less编辑成css文件
        ]
      },
      {
        test: /\.s[ac]ss$/,
        // loader:只能使用一个loader
        use: [
          //使用多个loader
          'style-loader',
          'css-loader',
          'sass-loader' //将sass编辑成css文件
        ]
      },
      {
        test: /\.styl$/,
        // loader:只能使用一个loader
        use: [
          //使用多个loader
          'style-loader',
          'css-loader',
          'stylus-loader' //将stylus编辑成css文件
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            //小于10kb的图片转base64
            //优点：减少请求数量 缺点：体积更大
            maxSize: 10 * 1024 //10kb
          }
        },
        generator: {
          //输出图片的名称
          //hash:10 hash值取前10位
          filename: 'static/images/[hash:10][ext][query]'
        }
      },
      {
        test: /\.(ttf|woff2?|map4|map3|avi)$/,
        type: 'asset/resource',
        generator: {
          //输出图片的名称
          //hash:10 hash值取前10位
          filename: 'static/media/[hash:10][ext][query]'
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, //排除node_modules中的js文件（这些文件不处理）
        loader: 'babel-loader'
        // options: {
        //   presets: ['@babel/preset-env']
        // }
      }
    ]
  },
  //插件
  plugins: [
    //plugins的配置
    new ESLintPlugin({
      //检测哪些文件
      context: path.resolve(__dirname, '../src')
    }),
    new HtmlWebpackPlugin({
      //模板：以public/index.html文件创建新的html文件
      //新的html文件特点：1.结构和原来的一致 2.自动引入打包的资源
      template: path.resolve(__dirname, '../public/index.html')
    })
  ],
  // 开发服务器:不会输出资源 在内存中编译打包的
  devServer: {
    host: 'localhost', // 启动服务器域名
    port: '3000', // 启动服务器端口号
    open: true // 是否自动打开浏览器
  }
}
