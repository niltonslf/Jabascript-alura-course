const gulp = require('gulp'),
      browserSync = require('browser-sync').create()

gulp.task('serve', () => {
  browserSync.init({
    server:{
      basedir:"./"
    }
  })
  gulp.watch('js/*.js').on('change', browserSync.reload)
})
