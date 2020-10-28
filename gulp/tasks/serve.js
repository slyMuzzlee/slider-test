const gulp = require('gulp')

const sass2scss = require('./styles')
const html = require('./html')
const images = require('./images')
const sprite = require('./sprite')
const scripts = require('./scripts')
const server = require('browser-sync').create()

function readyReload(cb) {
    server.reload()
    cb()
  }

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch('src/Content/**/*.scss', gulp.series(sass2scss, cb =>
        gulp.src('build/css').pipe(server.stream()).on('end', cb)))
    gulp.watch('src/*.html', gulp.series(html))
    gulp.watch('src/Content/images/*.{gif,png,jpg,svg,webp}', gulp.series(images, readyReload))
    gulp.watch('src/Content/icons/*.*', gulp.series(sprite, readyReload))
    gulp.watch('src/Content/js/*.js', gulp.series(scripts, readyReload))
    gulp.watch('build/*.html').on('change', server.reload)

    return cb()
}
