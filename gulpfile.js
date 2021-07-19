let gulp = require('gulp'),
	  sass = require('gulp-sass')(require('sass'));
		rename = require('gulp-rename'),
		browserSync = require('browser-sync'),
		autoprefixer = require('gulp-autoprefixer'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify-es').default,
		babel = require('gulp-babel'),
		cssmin = require('gulp-cssmin'),
		include = require('gulp-file-include'),
		webp = require('gulp-webp'),
		imagemin = require('gulp-imagemin'),
		recompress = require('imagemin-jpeg-recompress');


gulp.task('sass', function () {
	return gulp.src('src/scss/style.scss')
		.pipe(sass({ outputStyle: 'expanded' }))
		.pipe(gulp.dest('build/css'))
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 8 versions']
		}))
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.reload({ stream: true }))
});


gulp.task('style', function () {
	return gulp.src([
		'node_modules/normalize.css/normalize.css',
		'node_modules/swiper/swiper-bundle.css',
		'node_modules/magnific-popup/dist/magnific-popup.css',
	])
		.pipe(concat('libs.min.css'))
		.pipe(cssmin())
		.pipe(gulp.dest('build/css'))
});


gulp.task('script', function () {
	return gulp.src([
		'src/js/modules/*.js',
		'node_modules/jquery/dist/jquery.js',
		'node_modules/gsap/dist/gsap.js',
		'node_modules/swiper/swiper-bundle.js',
		'node_modules/scrollreveal/dist/scrollreveal.js',
		'node_modules/rellax/rellax.js',
		'node_modules/lax.js/lib/lax.js',
		'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
	])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build/js'))
});


gulp.task('html', function () {
	return gulp.src('src/*.html', '!src/blocks/**/*.html')
		.pipe(include({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('build/'))
		.pipe(browserSync.reload({ stream: true }));
});


gulp.task('js', function () {
	return gulp.src('src/js/main.js')
		.pipe(gulp.dest('build/js'))
		.pipe(babel())
		.pipe(uglify())
		.pipe(
			rename({
				suffix: ".min",
			}),
		)
		.pipe(gulp.dest('build/js'))
		.pipe(browserSync.reload({ stream: true }))
});


gulp.task('images', () => {
	return gulp.src('src/img/**/*.+(png|jpg|jpeg|gif|svg|ico)')
		.pipe(imagemin([
			recompress({
				loops: 4,
				min: 70,
				max: 80,
				quality: 'high'
			}),
			imagemin.gifsicle(),
			imagemin.optipng(),
		]))
		.pipe(gulp.dest('build/img'))
		.pipe(browserSync.reload({ stream: true }));
});


gulp.task('webp', () => {
	return gulp.src('src/img/**/*.+(png|jpg|jpeg)')
		.pipe(webp({
			quality: 80,
			preset: 'photo',
			method: 6
		}))
		.pipe(gulp.dest('build/img'))
		.pipe(browserSync.reload({ stream: true }))
});


gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: "build/"
		},
		// tunnel: "mydev",
		// host: "192.168.0.103"
	});
});


gulp.task('watch', function () {
	gulp.watch('src/scss/**/*.scss', gulp.parallel('sass'))
	gulp.watch('src/**/*.html', gulp.parallel('html'))
	gulp.watch('src/js/**/*.js', gulp.parallel('js'))
	gulp.watch('src/img/**/*.*', gulp.parallel('images'))
	gulp.watch('src/img/**/*.*', gulp.parallel('webp'))
});

gulp.task('default', gulp.parallel('style', 'script', 'sass', 'watch', 'browser-sync', 'images', 'webp', 'html', 'js'))