var gulp = require('gulp');
var scss = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var server = require('gulp-webserver');
var minJs = require('gulp-uglify');
var sequence = require('gulp-sequence');
var minHtml = require('gulp-htmlmin');

gulp.task('scss', function() {
    gulp.src('src/css/*.scss')
        .pipe(scss())
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'))
});
var options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
};
gulp.task('minHtml', function() {
    gulp.src('src/*.html')
        .pipe(minHtml(options))
        .pipe(gulp.dest('dist'))
});