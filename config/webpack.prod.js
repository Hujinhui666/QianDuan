const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
//用来处理样式的loader
function getStyleLoader(pre){
        return [//执行顺序 从右到左（从下到上）
        MiniCssExtractPlugin.loader,//将js中css添加到index页面style属性中
    "css-loader",//将css资源编译成commonjs的模块到js中
    {
        loader: "postcss-loader",
        options: {
            postcssOptions: {
            plugins: [
                "postcss-preset-env", // 能解决大多数样式兼容性问题
            ],
            },
        },
    },
    pre,
    ].filter(Boolean);
}

module.exports = {
    //入口
    entry:'./src/main.js',//相对路径
    //输出
    output:{
        //文件的输出路径(所有文件的输出目录)
        //__direname:代表当前文件夹目录
        path:path.resolve(__dirname,"../dist"),//绝对路径
        //文件名
        filename:'static/js/[name]-[hash].js',
        //自动清空上次打包结果
        //原理：在打包前 将path整个目录清空，再进行打包
        clean:true,
    },
    //加载器
    module:{
        rules:[
            //loader的配置
            {
                test:/\.css$/,//只检测xxx文件(正则)
                use:getStyleLoader()
            },
            {
                test:/\.less$/,
                // loader:只能使用一个loader
                use:getStyleLoader('less-loader')
            },
            {
                test:/\.s[ac]ss$/,
                // loader:只能使用一个loader
                use:getStyleLoader('sass-loader')
            },
            {
                test:/\.styl$/,
                // loader:只能使用一个loader
                use:getStyleLoader('stylus-loader')
            },
            {
                test:/\.(png|jpe?g|gif|webp|svg)$/,
                type:'asset',
                parser:{
                    dataUrlCondition:{
                        //小于10kb的图片转base64 
                        //优点：减少请求数量 缺点：体积更大
                        maxSize:10 * 1024,//10kb
                    }
                },
                generator:{
                    //输出图片的名称
                    //hash:10 hash值取前10位
                    filename:'static/images/[hash:10][ext][query]',
                }
            },
            {
                test:/\.(ttf|woff2?|map4|map3|avi)$/,
                type:'asset/resource',
                generator:{
                    //输出图片的名称
                    //hash:10 hash值取前10位
                    filename:'static/media/[hash:10][ext][query]',
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,//排除node_modules中的js文件（这些文件不处理）
                loader: 'babel-loader',
                // options: {
                //   presets: ['@babel/preset-env']
                // }
              }
        ]
    },
    //插件
    plugins:[
        //plugins的配置
        new ESLintPlugin({
            //检测哪些文件
            context: path.resolve(__dirname,'../src'),
        }),
        new HtmlWebpackPlugin({
            //模板：以public/index.html文件创建新的html文件
            //新的html文件特点：1.结构和原来的一致 2.自动引入打包的资源
            template: path.resolve(__dirname,"../public/index.html"),
        }),
        new MiniCssExtractPlugin({
            filename:'static/css/[name]-[hash].css',
        }),
        new CssMinimizerPlugin(),
    ],
    //模式
    mode:'production',
};