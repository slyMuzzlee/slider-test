const gulp = require('gulp')

module.exports = function scripts() {
    return gulp.src(
        ['src/Content/js/*.js'],
        ['node_modules/nouislider/**/*.min.js']
    )
    .pipe(gulp.dest('build/js'))
}