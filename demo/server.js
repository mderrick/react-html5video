var config = require('./webpack.config.js');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var compiler;
var server;

// Source maps
config.devtool = 'source-map';

config.output.publicPath = '/dist/';

// Remove minification to speed things up.
config.plugins.splice(1, 2);

// Add Hot Loader server entry points.
config.entry.app.unshift(
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server'
);

// Add HMR plugin
config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

// Add React Hot loader
config.module.loaders[0].loaders.unshift('react-hot');

compiler = webpack(config);
server = new webpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: true
});
server.listen(8080);
