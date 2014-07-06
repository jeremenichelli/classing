var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    karma = require('gulp-karma'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat-util'),
    package = require('./package.json');

var paths = {
        output : 'dist/',
        scripts : {
            src: 'src/' + package.name + '.js',
            dist: 'dist/' + package.name + '.js'
        },
        test: 'test/spec/' + package.name + '.spec.js'
    },
    banner = {
        top: '// ' + package.title + ' - ' + package.author + '\n' +
            '// ' + package.repository.url + ' - MIT License\n' +
            '(function(document){\n' +
            "    'use strict'" + ';\n',
        bottom: '\n})(document);'
    };

gulp.task('closure', ['test'],function(){
    return gulp.src(paths.scripts.src)
        .pipe(concat.header(banner.top))
        .pipe(concat.footer(banner.bottom))
        .pipe(gulp.dest(paths.output));
});

gulp.task('lint', ['closure'], function(){
    return gulp.src(paths.scripts.dist)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(gulp.dest(paths.output));
});

gulp.task('minify', ['lint'], function(){
    return gulp.src(paths.scripts.dist)
        .pipe(uglify())
        .pipe(rename({
            suffix : '.min'
        }))
        .pipe(gulp.dest(paths.output));
});

gulp.task('test', function(){
    return gulp.src([paths.scripts.src, paths.test])
        .pipe(plumber())
        .pipe(karma({ configFile: 'test/karma.conf.js' }));
});

gulp.task('default', ['minify']);
