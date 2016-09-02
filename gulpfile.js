var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	gulp.src('./prtf/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./prtf'));
});

gulp.task('sass:watch', function(){
gulp.watch('./prtf/**/*.scss', ['sass'])
	});