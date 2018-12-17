var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-webserver');
gulp.task('sass', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
});
gulp.task('watch', function() {
    return gulp.watch('./src/sass/*.scss', gulp.series('sass'))
});
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: '9090',
            proxies: [{
                source: "/api/get/train_tickets",
                target: "http://localhost:3000/api/get/train_tickets"
            }, {
                source: "/api/trains",
                target: "http://localhost:3000/api/trains"
            }]
        }))
});
gulp.task('dev', gulp.series('sass', 'server', 'watch'));