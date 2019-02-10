const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        contentBase: "./src",
        hot: true,
        port: 3000,
        historyApiFallback: true    
    },
    plugins: [        
        new HtmlWebpackPlugin({
          filename: 'public/index.html',
          template: 'src/index.html'
        })
    ]
}