const path = require('path');
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js', //入口配置
  output: {
    path: path.resolve(__dirname, 'lib'), //出口路径 绝对路径
    filename: 'index.js', //出口文件名修改
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', //  以public下的html文件作为模板去生成lib/html文件
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(), // 删除的是ouput path 里配置的那个输出文件的文件夹
  ],
};
