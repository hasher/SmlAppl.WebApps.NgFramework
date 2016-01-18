﻿/// <binding ProjectOpened='watch' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.initConfig({
		concat: {
			options: {
				separator: grunt.util.linefeed + grunt.util.linefeed,
			},
			dist: {
				src: ['Scripts/app/app.js', 'Scripts/app/**/*.js'],
				dest: '../../SmlAppl.WebApps.NgFramework.js',
			},
		},
		uglify: {
			my_target: {
				files: {
					//'wwwroot/app.js': ['Scripts/app/app.js', 'Scripts/app/**/*.js'],
					'../../SmlAppl.WebApps.NgFramework.min.js': ['Scripts/app/app.js', 'Scripts/app/**/*.js']
				}
			}
		},
		watch: {
			scripts: {
				files: ['Scripts/app/**/*.js'],
				tasks: ['uglify']
			}
		}
	});
	grunt.registerTask('default', ['concat', 'uglify', 'watch']);
};