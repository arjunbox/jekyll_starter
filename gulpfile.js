// run the FOLLOWING BEFORE trying to run gulp
// npm install gulp-cli -g
// npm install gulp -D
// npm install
var gulp = require('gulp');
var imageop = require('gulp-image-optimization');

gulp.task('images', function(cb) {
    gulp.src(['assets/_src_img/**/*.png','assets/_src_img/**/*.jpg','assets/_src_img/**/*.gif','assets/_src_img/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('img')).on('end', cb).on('error', cb);
});

gulp.task('default', ['images']);
