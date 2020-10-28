const gulp = require('gulp')
const sass = require('gulp-sass')

module.exports = function styles() {
    return gulp.src('src/Content/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
}