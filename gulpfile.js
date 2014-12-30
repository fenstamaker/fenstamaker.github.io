var gulp = require("gulp");
var glob = require('glob');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function() {
    return gulp.src('stylesheets/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
	.pipe(minifyCSS({
	    processImports: true
	}))
        .pipe(gulp.dest('./dist/'));
})
