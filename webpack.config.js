const path = require('path');

module.exports = {
  entry: './src/main.js', //入口配置
  output: {
    path: path.resolve(__dirname, 'lib'), //出口路径 绝对路径
    filename: 'index.js', //出口文件名修改
  },
};
