/*
{
  "entry": "src/index.js",
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime"
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime"
      ]
    }
  }
}
*/
const path = require('path'),
  pxtorem = require('postcss-pxtorem');

const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  path.resolve(__dirname, 'src/assets'),  // 业务代码本地私有 svg 存放目录
];

export default {
  entry: 'src/index.js',
  svgSpriteLoaderDirs: svgSpriteDirs,
  theme: "./theme.config.js",
  proxy: {
    "/api": {
      "target": "http://t.tkapi.taiduzhifu.com/",
      "changeOrigin": true,
      /*"pathRewrite": {"^/api": ""}*/
    },
    "/img": {
      "target": "http://tk.taiduzhifu.com",
      "changeOrigin": true,
    },
    "/test": {
      "target": "http://localhost:80/",
      "changeOrigin": true,
      "pathRewrite": {"^/test/api/User": ""}
    }
  },
   resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['js', '.jsx']
  },
  autoprefixer: {
    "browsers": [
      "last 4 versions",
      "Firefox ESR",
      "> 1%",
      "ie >= 8",
      "iOS >= 8",
      "Android >= 4"
    ]
  },
  env: {
    development: {
      extraBabelPlugins: [
        'dva-hmr',
        'transform-runtime',
        ['import', {'libraryName': 'antd-mobile', 'libraryDirectory': 'lib', 'style': true}]
      ],
    },
    production: {
      extraBabelPlugins: [
        'dva-hmr',
        'transform-runtime',
        ['import', {'libraryName': 'antd-mobile', 'libraryDirectory': 'lib', 'style': true}]
      ],
    }
  }
}

