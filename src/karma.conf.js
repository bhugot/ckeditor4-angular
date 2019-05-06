// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine', '@angular-devkit/build-angular'],
		plugins: [
			require('karma-jasmine'),
			require('karma-chrome-launcher'),
			require('karma-jasmine-html-reporter'),
			require('karma-coverage-istanbul-reporter'),
			require('@angular-devkit/build-angular/plugins/karma')
		],
		files: [
			{ pattern: '../node_modules/ckeditor/ckeditor.js', included: true, served: true, watched: false, nocache: true },
			{ pattern: '../node_modules/ckeditor/+(core|plugins|skins|lang)/**/*', included: false, served: true, watched: false, nocache: true },
			{ pattern: '../node_modules/ckeditor/+(config|styles).js', included: false, served: true, watched: false, nocache: true },
			{ pattern: '../node_modules/ckeditor/contents.css', included: false, served: true, watched: false, nocache: true },
		],
		client: {
			clearContext: false // leave Jasmine Spec Runner output visible in browser
		},
		coverageIstanbulReporter: {
			dir: require('path').join(__dirname, '../coverage'),
			reports: ['html', 'lcovonly'],
			fixWebpackSourcePaths: true
		},
		reporters: ['progress', 'kjhtml'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false
	});
};
