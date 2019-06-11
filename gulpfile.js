const { src, task, dest, series } = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const eslint = require('gulp-eslint');

const source = './lib/**/*.ts';
const dist = './dist/*';

/**
 * linting gulp pipeline
 */
const lint = () => {
    return src(source)
        .pipe(eslint())
        .pipe(eslint.format('stylish'));
}
lint.description = 'Runs eslint';

/**
 * cleaning gulp pipeline
 */
const clean = () => {
    return del([dist]);
}
clean.description = 'Removes all files and directories from the dist directory';

/**
 * compiling gulp pipeline
 */
const compile = () => {
    const tsProject = ts.createProject('./tsconfig.json');

    return src(source)
        .pipe(sourcemaps.init())
            .pipe(tsProject())
            .js
        .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '' }))
        .pipe(dest('./dist'));
}
compile.description = 'Runs tsc (typescript compiler)';

/**
 * building gulp pipeline
 */
const build = series(lint, clean, compile);
build.description = 'Lints, cleans and then compiles';

// create gulp tasks
task('lint', lint);
task('clean', clean);
task('compile', compile);
task('default', build);
