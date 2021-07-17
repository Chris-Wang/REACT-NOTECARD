const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'development',
    entry: './index.js',
    module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react']
              }
            }
          },{
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
        ]
       },
      devServer: {
        port: 9000,
      },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
    ],

}