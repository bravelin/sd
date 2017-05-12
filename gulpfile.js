var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
  autoprefixer = require('gulp-autoprefixer');

var raw_css = 'src/sass',
    com_css = 'src/styles';

//处理scss
gulp.task('sass', function() {
  return sass(raw_css + '/**/*.scss')
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4.0','Firefox >=20'],
      cascade: true, //是否美化属性值 默认：true 像这样：
      remove:true //是否去掉不必要的前缀 默认：true
    }))
    .pipe(gulp.dest(com_css));
});

//清理
gulp.task('clean', function () {
    return gulp.src(['dist/*', 'src/styles/*'], {read: false})
        .pipe(clean());
});

//启动server
gulp.task('connect', function () {
    connect.server({
        port: 8089
    });
});

//监控改变
gulp.task('watch', function (){
    gulp.watch(raw_css + '/**/*.scss', ['sass']);
});

gulp.task('default', function () {
    gulp.run(['clean','sass','watch', 'connect']);
});

gulp.task('style', function () {
    gulp.run(['clean','sass']);
});
