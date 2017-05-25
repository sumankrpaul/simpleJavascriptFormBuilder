'use strict';

var gulp = require('gulp'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    ts = require('gulp-typescript'),
    jshint = require('gulp-jshint'),
    runSequence = require('run-sequence'),
    uglify = require('gulp-uglify');



gulp.task('clean', function() {
    return del.sync('dist/');
})


gulp.task('scripts', function() {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('test', function() {
    browserSync.init({
        server: {
            baseDir: "."
        },
        files:['src/*.js'],
        ui: false,
        port: 3090,
        open: false,
        online: false
    });
})

gulp.task('dev', ['clean', 'scripts','test'], function() {
    gulp.watch('src/**/*.ts', function() {
        gulp.run('clean','scripts');
    })
})

gulp.task('default', ['dev'], function() {
    console.log("The gulp has done its work");
})
