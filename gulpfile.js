var gulp = require('gulp');
var shell = require('gulp-shell');

require('npm-path').setSync();

gulp.task('test', shell.task('./node_modules/.bin/pioneer'));
