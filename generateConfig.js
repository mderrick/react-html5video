const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const pkg = require('./package.json');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = (options = {}) => {
    return {
        entry: [
            path.resolve(srcPath, 'Entry.js')
        ],
        target: 'web',
        output: {
            path: options.outputPath || distPath,
            filename: 'index.js',
            libraryTarget: 'umd',
            library: pkg.name
        },
        resolve: {
            extensions: ['.js', '.json', '.jsx', '']
        },
        externals: [{
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        }],
        module: {
            loaders: [{
                test: /\.(js|jsx)$/,
                include: srcPath,
                loader: 'babel',
                query: {
                    cacheDirectory: true
                }
            }, {
                test: /\.css$/,
                include: srcPath,
                loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1&localIdentName=[hash:base64:5]&hashPrefix=react-html5video&-autoprefixer!postcss')
            }, {
                test: /\.(eot|ttf|woff|woff2|svg)(\?.*)?$/,
                loader: 'url'
            }]
        },
        plugins: [
            new ExtractTextPlugin('styles.css'),
            new CaseSensitivePathsPlugin()
        ]
    };
};
