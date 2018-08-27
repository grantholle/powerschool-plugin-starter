'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const clipboard = require('gulp-clipboard')
const copy = require('copy-paste').copy
const log = require('fancy-log')
const p = require('path')
const fs = require('fs')
const paths = {
  input: 'scss/styles.scss',
  output: './web_root/scripts/CHANGE PATH HERE'
}

gulp.task('css', () => {
  return gulp.src(paths.input)
    .pipe(sass().on('error', sass.logError))
    .pipe(clipboard())
    .pipe(gulp.dest(paths.output))
})

gulp.task('default', ['css'], () => {
  gulp.watch('scss/**/*.scss', ['css'])

  gulp.watch('web_root/**/*', e => {
    if (e.type !== 'changed') {
      return;
    }

    fs.readFile(e.path, 'utf8', (err, data) => {
      copy(data, () => {
        log(`Copied ${p.basename(e.path)} to clipboard`)
      })
    })
  })
})
