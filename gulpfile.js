
var gulp = require('gulp');

var clean = require('gulp-clean');

var transport = require('gulp-seajs-transport');

var concat = require('gulp-seajs-concat');

var uglify = require('gulp-uglify');

gulp.task('clean', function () {
	return gulp.src('./public/dist')
		.pipe(clean());
});

gulp.task('seajsmodule', ['clean'], function () {

	gulp.src('./public/scripts/**/*.js')
		.pipe(transport({
			idleading: '/dist/'
		}))
		.pipe(concat())
		.pipe(uglify())
		.pipe(gulp.dest('./public/dist'));

});

gulp.task('default', ['seajsmodule']);