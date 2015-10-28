var path = require('path');
var webpack = require('webpack');

module.exports = {
    debug: true,
    entry: {
        app: [
            './src/entry.js',
            './src/assets/app.css'
        ]
    },
    target: 'web',
    // Resolves are needed as we require a file that is
    // in a parent directory and webpack can't find node_modules
    // when we do this.
    resolveLoader: {
        root: path.join(__dirname, './node_modules')
    },
    resolve: {
        root: path.join(__dirname, './node_modules')
    },
    output: {
        publicPath: '/dist/',
        path: path.join(__dirname, './dist'),
        filename: 'app.js',
        chunkFilename: '[id].js'
    },
    module: {
        // Babel loader must be first as it's modified by server.js
        loaders: [{
            test: /\.js$/,
            // Must be an array as server.js adds 'react-hot' loader
            loaders: ['babel'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(svg|woff([\?]?.*)|ttf([\?]?.*)|eot([\?]?.*)|svg([\?]?.*))$/i,
            loader: 'url?limit=10000'
        }]
    },
    plugins: [
        // First two plugins are removed by server.js
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
