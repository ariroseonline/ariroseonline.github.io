var gulp = require('gulp');
var sass = require('gulp-sass');
// var jshint = require('gulp-jshint');
// var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var handlebars = require('gulp-compile-handlebars');
var fs = require('fs');

gulp.task('styles', function() {
  gulp.src('scss/styles.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dist/'));
});



gulp.task('js', function() {
  return browserify('./js/app.js')
    .bundle()
    //Pass desired output filename to vinyl-source-stream
    .pipe(source('app.js'))
    // Start piping stream to tasks!
    .pipe(gulp.dest('./dist/'))
});


gulp.task('uglify', ['js'], function(){
  return gulp.src(['dist/app.js'])
      .pipe(rename('uglify.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/'));
});
 
gulp.task('templates', function () {
  var templateData = JSON.parse(fs.readFileSync("./projects.json", "utf8"));
	// var templateData = require('./projects');

	options = {
		ignorePartials: false, //ignores the unknown footer2 partial in the handlebars template, defaults to false 
		batch : ['./templates/partials'],
		helpers : {
			capitals : function(str){
				return str.toUpperCase();
			}
		}
	}
	// console.log(templateData)
	return gulp.src('templates/index.hbs')
		.pipe(handlebars(templateData, options))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['js', 'uglify']);
    gulp.watch('scss/**/*.scss', ['styles']);
    gulp.watch('templates/**/*.hbs', ['templates']);
    gulp.watch('projects.json', ['templates']);
});

//Watch task
gulp.task('default', ['styles', 'js', 'uglify', 'watch', 'templates']);