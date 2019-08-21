const mix = require('laravel-mix');

mix
    .js('resources/js/app.js', 'assets/js')
    .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery']
    })
    .sass('resources/sass/app.scss', 'assets/css')
    .disableNotifications()
    .options({
        processCssUrls: false
    });

