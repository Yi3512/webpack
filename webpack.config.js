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
  devServer: {
    port: 3000, //端口号
    open: true, //自动打开
  },
  module: {
    // loader 加载器 配置在这儿
    rules: [
      // loader的规则
      {
        test: /\.css$/, // 匹配所有的css文件
        // loader 执行的顺序： use数组里从右向左运行
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 将样式, 把css插入到dom中
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/, // 匹配执行类型的文件
        // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
        // 执行的顺序 less-loader css-loader style-loader
        // less-loader 先把less代码转换成css
        // css-loader 再把css代码转换成webpack 可以识别的js代码
        // style-loader 在把css代码插入到 dom中
        use:['style-loader','css-loader','less-loader']
      },
    ],
  },
};
