const {task, dest , series, src } = require('gulp');
const pug = require('gulp-pug');

task('pug', () => [
    src('src/pug/*.pug')
        .pipe(pug())
        .pipe(dest('dist/html'))
]) 