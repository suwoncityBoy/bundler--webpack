// import 가져오기
const path = require('path') //path라는 전역모듈을 가져와 path에 할당
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


//export 내보내기
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정 , webpack은 js를 진입점으로 사용
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'), // dist폴더에 결과물 내어줌 , 절대경로 명시 
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [{
        test: /\.s?css$/, // s가 있을수도 있고 없을수도 있다. css, scss 둘다 찾음
        use: [
          'style-loader', //main.css에 해석된 내용을 삽입하는 패키지
          'css-loader', //JS에서 CSS 파일을 해석하는 패키지
          'postcss-loader', // 공급업체 접두사를 적용해주는 패키지
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정 
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [{
          from: 'static'
        } // static 폴더안에 있는 내용들이 복사되어 dist폴더 안에 들어갈 수 있게 설정하는 옵션
      ]
    })
  ],

  // devServer: {
  //   host: 'localhost'
  // }
}