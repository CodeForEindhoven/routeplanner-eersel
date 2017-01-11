var gulp = require('gulp'),
less = require('gulp-less'),
include = require("gulp-include"),
install = require("gulp-install"),
gp_concat = require('gulp-concat'),
gp_rename = require('gulp-rename'),
gp_uglify = require('gulp-uglify'),
gp_sourcemaps = require('gulp-sourcemaps');

var spawn = require('child_process').spawn;
var path = require('path');

var node;

var dirs = {
	buildDir: "./build",
	sourceDir: "./src",
};

//automagically re-build and run
gulp.task('develop', function() {
	gulp.start(['build','run']);
	gulp.watch(dirs.sourceDir + '/**/*', ['build']);
});

//run node, if it's already running
gulp.task('run', function() {
	if (node) node.kill();
	node = spawn('node', ['node_modules/http-server/bin/http-server','build','-p 3000'], {stdio: 'inherit'});
	node.on('close', function (code) {
		if (code === 8) {
			gulp.log('Error detected, waiting for changes...');
		}
	});
});

//kill node on exit
process.on('exit', function() {
	if (node) node.kill();
});

/* Build */
gulp.task('build', ['main', 'js', 'ROSM', 'templates', 'ionic', 'less', 'html', 'img']);
gulp.task('main', function(){
	return gulp.src([
    dirs.sourceDir+'/js/main.js'
	])
	//.pipe(gp_sourcemaps.init())
	.pipe(gp_concat('main.js'))
	.pipe(gulp.dest(dirs.buildDir+'/js'))
	.pipe(gp_rename('main.min.js'))
	.pipe(gp_uglify())
	.pipe(gp_sourcemaps.write('./'))
	.pipe(gulp.dest(dirs.buildDir+'/js'));
});
gulp.task('js', function(){
	return gulp.src([
    dirs.sourceDir+'/js/app.js',
    dirs.sourceDir+'/js/controllers.js',
    dirs.sourceDir+'/js/routes.js',
    dirs.sourceDir+'/js/directives.js',
    dirs.sourceDir+'/js/services.js'
	])
	//.pipe(gp_sourcemaps.init())
	.pipe(gp_concat('app.js'))
	.pipe(gulp.dest(dirs.buildDir+'/js'))
	.pipe(gp_rename('app.min.js'))
	.pipe(gp_uglify())
	.pipe(gp_sourcemaps.write('./'))
	.pipe(gulp.dest(dirs.buildDir+'/js'));
});
gulp.task('ionic', function(){
	return gulp.src(
    dirs.sourceDir+'/lib/ionic/**/**'
	)
	.pipe(gulp.dest(dirs.buildDir+'/lib/ionic'));
});
gulp.task('templates', function(){
	return gulp.src(
    dirs.sourceDir+'/templates/**/**'
	)
	.pipe(gulp.dest(dirs.buildDir+'/templates'));
});
gulp.task('ROSM', function(){
	return gulp.src([
    dirs.sourceDir+'/lib/ROSM/ROSM.base.js',
    dirs.sourceDir+'/lib/ROSM/ROSM.classes.js',
    dirs.sourceDir+'/lib/ROSM/ROSM.Map.js',
    dirs.sourceDir+'/lib/ROSM/ROSM.Markers.js',
    dirs.sourceDir+'/lib/ROSM/ROSM.Marker.js',
    dirs.sourceDir+'/lib/ROSM/ROSM.Routing.js',
    dirs.sourceDir+'/lib/ROSM/ROSM.Route.js',
    dirs.sourceDir+'/lib/ROSM/ROSM.SimpleRoute.js',
    dirs.sourceDir+'/lib/ROSM/ROSM.RoutingGeometry.js',
    dirs.sourceDir+'/lib/ROSM/ROSM.RoutingDescription.js',
    dirs.sourceDir+'/lib/ROSM/ROSM.GUI.js',
    dirs.sourceDir+'/lib/ROSM/ROSM.JSON.js',
    dirs.sourceDir+'/lib/ROSM/ROSM.GeoJson.js',
    dirs.sourceDir+'/lib/ROSM/ROSM.Geocoder.js',
    dirs.sourceDir+'/lib/ROSM/ROSM.POI.js'
	])
	//.pipe(gp_sourcemaps.init())
	.pipe(gp_concat('rosm.js'))
	.pipe(gulp.dest(dirs.buildDir+'/js'))
	.pipe(gp_rename('rosm.min.js'))
	.pipe(gp_uglify())
	.pipe(gp_sourcemaps.write('./'))
	.pipe(gulp.dest(dirs.buildDir+'/js'));
});

//compile Less files to Css
gulp.task('less', function () {
	return gulp.src(dirs.sourceDir + '/style/style.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(gulp.dest(dirs.buildDir+'/style'));
});

//simply copy html and static files
gulp.task('html', function(){
	return gulp.src(dirs.sourceDir+'/*.html')
	.pipe(gulp.dest(dirs.buildDir+'/'));
});

gulp.task('img', function(){
	return gulp.src(dirs.sourceDir + '/img/*')
	.pipe(gulp.dest(dirs.buildDir + '/img'));
});
