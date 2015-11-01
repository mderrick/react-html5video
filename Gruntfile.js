module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-fontello-react');
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.initConfig({
        'fontello-react': {
            video: {
                options: {
                    fontName: 'video-fontello',
                    svgPath: './src/assets/font/video-fontello.svg',
                    woffPath: './src/assets/font/video-fontello.woff',
                    eotPath: './src/assets/font/video-fontello.eot',
                    ttfPath: './src/assets/font/video-fontello.ttf',
                    jsTplPath: './src/fontello-react-component.tpl',
                    cssTplPath: './src/fontello-react-css.tpl',
                    jsOutputPath: './src/components/icon/Icon.js',
                    cssOutputPath: './src/components/icon/icon.css'
                }
            },
            demo: {
                options: {
                    svgPath: './demo/src/assets/font/fontello.svg',
                    woffPath: './demo/src/assets/font/fontello.woff',
                    eotPath: './demo/src/assets/font/fontello.eot',
                    ttfPath: './demo/src/assets/font/fontello.ttf',
                    jsTplPath: './demo/src/fontello-react-component.tpl',
                    cssTplPath: './demo/src/fontello-react-css.tpl',
                    jsOutputPath: './demo/src/components/icon/Icon.js',
                    cssOutputPath: './demo/src/components/icon/icon.css'
                }
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
