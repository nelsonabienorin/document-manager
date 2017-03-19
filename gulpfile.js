const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
  gulp.src('server/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/server'));
});
