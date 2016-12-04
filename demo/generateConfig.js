const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const pkg = require('./../package.json');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = ({ optimize, extractCss, hot, publicPath = '/' }) => {
    const cssString = 'css?modules&importLoaders=1&localIdentName=[hash:base64:5]&-autoprefixer!postcss';
    let config = {
        entry: [
            path.resolve(srcPath, 'entry.js')
        ],
        output: {
            path: distPath,
            filename: '[name].js',
            publicPath: publicPath
        },
        resolve: {
            extensions: ['.js', '.json', '.jsx', '']
        },
        module: {
            loaders: [{
                test: /\.(js|jsx)$/,
                include: srcPath,
                loader: 'babel',
                query: {
                    cacheDirectory: true
                }
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.css$/,
                include: srcPath,
                loader: extractCss
                    ? ExtractTextPlugin.extract('style', cssString)
                    : 'style!' + cssString
            }, {
                test: /\.css$/,
                include: new RegExp(pkg.name + '/dist/'),
                loader: extractCss
                    ? ExtractTextPlugin.extract('style', 'css')
                    : 'style!css'
            }, {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|svg)(\?.*)?$/,
                loader: 'file'
            }]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(srcPath, 'index.html')
            }),
            new CaseSensitivePathsPlugin()
        ]
    };

    if (hot) {
        config.entry.unshift(
            'webpack-hot-middleware/client',
            'react-hot-loader/patch'
        );
        config.plugins.unshift(
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        );
    }

    if (extractCss) {
        config.plugins.push(new ExtractTextPlugin('[name].css'));
    }

    if (optimize) {
        config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }));
    }

    return config;
};
