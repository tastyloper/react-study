const path = require('path');

module.exports = {
  name: 'lotto-setting',
  mode: 'development', // 실서비스 : production
  devtool: 'eval', // 실서비스 : hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: { // 입력
    app: ['./client'],
  },

  module: { // entry를 읽어서 module을 적용해서 output으로 뺀다.
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR'],
            },
            debug: true,
          }],
          '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-hot-loader/babel'
        ],
      }
    }],
  },
  
  output: { // 출력
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  },
};