const path = require('path');
module.exports = {
    entry : './src/HackedRecipe.js',
    output: {
        path : path.join(__dirname, 'public'),
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
      host:'000.000.00.00',
      port: 8888
    },
}