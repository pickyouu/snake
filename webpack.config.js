const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  mode: "production",//生产者模式
  entry: "./src/index.ts",//入口文件
  //打包后的文件地址
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundule.js"
  },
  //module中的rules对应相应文件使用到的loader
  module: {
    rules: [
      {
        test: /\.ts$/,//正则匹配.ts结尾的文件
        use: "ts-loader",//使用的是ts-loader
        exclude: /node_modules/ //排除node_modules文件夹中的文件
      },
      {
        test: /.less$/,//正则匹配.less结尾的文件
        use: [
          "style-loader",//style-loader将处理后的文件引入项目
          "css-loader",//处理css文件
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                      browsers: 'last 2 versions'
                    },
                  ],

                ],
              },
            },
          },
          "less-loader"//先使用less-loader将.less文件处理为.css文件
        ],
        exclude: /node_modules/ //排除node_modules文件夹中的文件
      },

    ]
  },
  //webpack使用到的插件
  plugins: [
    //实例化了一个插件
    new htmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  //解决导入ts,js模块化的问题
  resolve: {
    extensions: [".ts", ".js"]
  }
}