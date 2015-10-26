module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-fontello-react');
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.initConfig({
        'fontello-react': {
            options: {
                svgPath: './src/assets/font/fontello.svg',
                woffPath: './src/assets/font/fontello.woff',
                eotPath: './src/assets/font/fontello.eot',
                ttfPath: './src/assets/font/fontello.ttf',
                jsTplPath: './src/fontello-react-component.tpl',
                cssTplPath: './src/fontello-react-css.tpl',
                jsOutputPath: './src/components/icon/Icon.js',
                cssOutputPath: './src/components/icon/icon.css'
            }
        },
        'gh-pages': {
            options: {
                base: 'demo'
            },
            src: ['**']
        }
    });
}
