const gulp = require('gulp')

module.exports = function images() {
    return gulp.src('src/Content/images/*.{gif,png,jpg,svg,webp}')
    .pipe(gulp.dest('build/images'))
}