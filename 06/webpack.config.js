//本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle
// webpack的四个核心概念 入口（entry） 出口（output） loader（转换器） 插件（plugins）


//在js模块中引用css文件 需要加载 style-loader css-loader 这使你可以在依赖于此样式的文件中 import './style.css'。现在，当该模块运行时，含有 CSS 字符串的 <style> 标签，将被插入到 html 文件的 <head> 中。

//加载图片需要 file-loader

//自动生产index.html

//webpack-dev-server 热加载

const path = require('path');
//console.log(path.resolve('./dist'));
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.js',                 //项目的入口文件
    output: {
        filename: 'build.js',               //项目出口的文件名称
        path: path.resolve('./dist')        //项目生产的文件夹
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.png|svg|gif|jpg$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        //new HtmlWebpackPlugin({title: 'Output Management'})
    ]
};



