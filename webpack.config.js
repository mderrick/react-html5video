var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        // CSS Must be first or the Video component will not be
        // exported.
        './src/assets/video.css',
        './src/components/video/video.js'
    ],
    target: 'web',
    externals: [{
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        },
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
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel?optional=runtime'
        }, {
            test: /\.(svg|woff([\?]?.*)|ttf([\?]?.*)|eot([\?]?.*)|svg([\?]?.*))$/i,
            loader: 'url-loader?limit=10000'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }]
    },
    plugins: [
        new ExtractTextPlugin('ReactHtml5Video.css')
    ]
};
