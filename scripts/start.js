/* eslint-disable no-console */

const path = require('path');
const pkg = require('./../package.json');
const express = require('express');
const webpack = require('webpack');
const detect = require('detect-port');
const chalk = require('chalk');
const open = require('open');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const generateDemoConfig = require('./../demo/generateConfig');
const generateComponentConfig = require('./../generateConfig');

const app = express();
const compiler = webpack([
    generateComponentConfig({
        // Build the component library into node_modules
        // so we need not do a symlink for development.
        outputPath: path.resolve(__dirname, '../demo/node_modules/' + pkg.name + '/dist')
    }),
    generateDemoConfig({
        hot: true,
        optimize: false,
        extractCss: false
    })
]);
const [componentCompiler, demoCompiler] = compiler.compilers;

componentCompiler.watch({}, function(err) {
    if (err) {
        throw err;
    }
});
app.use(webpackDevMiddleware(demoCompiler));
app.use(webpackHotMiddleware(demoCompiler));

const run = (port) => {
    detect(port, (err, _port) => {
        if (port === _port) {
            app.listen(_port, () => {
                const url = `http://localhost:${port}`;
                console.log(chalk.cyan(`Server running at ${url}.`));
                open(url);
            });
        } else {
            run(port + 1);
        }
    });
};

run(6060);
