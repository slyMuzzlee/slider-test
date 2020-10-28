const gulp = require('gulp')
const spritesmith = require('gulp.spritesmith');
const merge = require('merge-stream');

module.exports = function sprite() {
    const spriteData = gulp.src('src/Content/icons/*.*')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            imgPath: '../images/sprite.png',
            cssName: 'sprite.css',
        }));
    const imgStream = spriteData.img.pipe(gulp.dest('build/images'));
    const cssStream = spriteData.css.pipe(gulp.dest('build/css'));

    return merge(imgStream, cssStream)
}