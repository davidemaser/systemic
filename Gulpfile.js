let gulp = require('gulp');
let sass = require('gulp-sass');
gulp.task('sass', function () {
    return gulp.src('./src/Stylesheets/scss/Index.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./src/Stylesheets/css'));
});
gulp.task('default', ['sass']);
