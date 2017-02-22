var generateConfig = require('./generateConfig');
var pkg = require('./../package.json');

module.exports = generateConfig({
    hot: false,
    optimize: true,
    extractCss: true,
    publicPath: '/' + pkg.name + '/'
});
