var gulp=require('gulp'),
	imageMin= require('gulp-imagemin');
gulp.task('imgchange',function(){
	gulp.src('./img/1.jpg').pipe(imageMin({
		progressive:true
	})).pipe(gulp.dest('./img2'));
})
gulp.task('two',function(){
	gulp.run(['imgchange']);
})

gulp.task('default',['imgchange']);