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
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

/*js检查任务*/
gulp.task('jshints', function() {
    gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/*Sass转换任务*/
gulp.task('sass', function() {
    gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'))
        .pipe(reload({ stream: true }));
});

// 合并，压缩文件
gulp.task('scripts', ['jshints'], function() {
    gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(reload({ stream: true }));
});

// 静态服务器 + 监听 scss/pug/js/图片 文件
gulp.task('server', function() {
    var files = [
        './dist/**/*.*'
    ];
    browserSync.init({
        server: "./dist/"
    });

    gulp.watch("./src/**/*.pug", ['pug']);
    gulp.watch("./src/sass/*.scss", ['sass']);
    gulp.watch("./src/js/*.js", ['scripts']);
    gulp.watch("./src/images/*.*", ['imgmin']);
    gulp.watch("./dist/*/*.*").on('change', reload);
});

/*jade转换任务*/
gulp.task('pug', function() {
    gulp.src('./src/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./dist'))
        .pipe(reload({ stream: true }));
});

/*image照片压缩*/
gulp.task('imgmin', function() {
    gulp.src('./src/images/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
        .pipe(reload({ stream: true }));
});

// 默认任务
gulp.task('default', ['server', 'imgmin']);