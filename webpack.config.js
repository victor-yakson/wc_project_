const path = require('path');
module.exports = {
    mode: 'development',
    entry:{
        bundle: path.resolve(__dirname, 'src/main.js')
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]}
    
}