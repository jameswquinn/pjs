const gulp = require('gulp');
const gulpEjsMonster = require('gulp-ejs-monster');

gulp.task('ejs', function() {
    return gulp.src('*.ejs')
        .pipe(gulpEjsMonster({/* plugin options */}))
        .pipe(gulp.dest('./dist/'));
});
