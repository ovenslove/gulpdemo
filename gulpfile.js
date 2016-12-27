// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var imagemin = require('gulp-imagemin');
var cssmin = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

/*js检查任务*/
gulp.task('jshints', function () {
	gulp.src('./src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

/*Sass转换任务*/
gulp.task('sass', function () {
	gulp.src('./src/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./dist/css'))
		.pipe(cssmin())
		.pipe(gulp.dest('./dist/css'));
});

// 合并，压缩文件
gulp.task('scripts', ['jshints'], function () {
	gulp.src('./src/js/*.js')
		.pipe(gulp.dest('./dist/js'))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(uglify())
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('browser-sync', function () {
	var files = [
        './dist/**/*.*'
     ];

	browserSync.init(files, {
		proxy: 'localhost:/gulp-project/dianshangbao/dist/view',
		browser: 'chrome',
		notify: false,
		port: 4001
	});

	gulp.watch(files).on("change", reload);
});

/*jade转换任务*/
gulp.task('templates', function () {
	gulp.src('./src/view/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('./dist/view'));
});

/*image照片压缩*/
gulp.task('imgmin', function () {
	gulp.src('./src/images/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/images'));
});

// 默认任务
gulp.task('default', ['imgmin', 'browser-sync']);

// 监听文件变化

gulp.watch([
    './src/js/*.js',
    './src/sass/*.scss',
    './src/view/**/*.pug'
], ['sass', 'scripts', 'templates', 'imgmin']);
