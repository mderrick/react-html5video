var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/components/video/video.js',
        './src/assets/video.css'
    ],
    target: 'web',
    externals: [{
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': 'react-dom',
        'react-addons-pure-render-mixin': 'react-addons-pure-render-mixin'
    }],
    output: {
        path: './dist',
        filename: 'ReactHtml5Video.js',
        libraryTarget: 'umd',
        library: 'ReactHtml5Video'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.(svg|woff([\?]?.*)|ttf([\?]?.*)|eot([\?]?.*)|svg([\?]?.*))$/i,
            loader: 'url?limit=10000'
        }]
    },
    plugins: [
        new ExtractTextPlugin('ReactHtml5Video.css')
    ]
};
