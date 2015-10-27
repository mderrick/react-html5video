var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.js$/,
            loader: 'babel'
        }, {
            test: /\.(svg|woff([\?]?.*)|ttf([\?]?.*)|eot([\?]?.*)|svg([\?]?.*))$/i,
            loader: 'url?limit=10000'
        }]
    },
    plugins: [
        new ExtractTextPlugin('ReactHtml5Video.css'),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            output: {
                comments: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
};
