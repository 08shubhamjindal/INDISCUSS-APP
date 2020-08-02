const path = require('path');
module.exports = {
    entry : './src/HackedRecipe.js',
    output: {
        path : path.join(__dirname, 'public'),
        publicPath: '/',
        filename : 'bundle.js'
    },
    module: {
        rules: [
            {
              loader : 'babel-loader',
              test: /\.js$/,
              exclude : /node_modules/      
            }
          ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true,
        historyApiFallback: true
    },
}