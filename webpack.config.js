var path = require('path');
var webpack = require('webpack');

module.exports = {
    debug: true,
    entry: './src/entry.js',
    target: 'web',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'app.js',
        chunkFilename: '[id].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};
