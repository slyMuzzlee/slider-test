const gulp = require('gulp')

const sass2scss = require('./gulp/tasks/styles')
const html = require('./gulp/tasks/html')
const images = require('./gulp/tasks/images')
const serve = require('./gulp/tasks/serve')
const scripts = require('./gulp/tasks/scripts')
const sprite = require('./gulp/tasks/sprite')

const dev = gulp.parallel(sass2scss, html, images, scripts, sprite)

const build = gulp.series(dev)

module.exports.start = gulp.series(serve)
module.exports.build = gulp.series(build)

