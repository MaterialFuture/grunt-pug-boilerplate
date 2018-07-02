// Gruntfile.js
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/*
		 =====================================================================================================================================
		 start of watch
		 =====================================================================================================================================
		 *
		 */

		watch: {
			content: {
				files: ['*.html', '*.pug'],
				tasks: ['newer:pug', 'newer:htmlmin' ],
				options: {
					livereload: false,
					spawn: false
				}
			},
			pug: {
				files: ['pug/hp/*.pug', 'pug/lp/*.pug', 'pug/components/variables/*.pug', 'pug/components/*.pug'],
				tasks: ['pug'],
				options: {
					livereload: true,
					spawn: true,
				}
			},
			scripts: {
				files: ['js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					livereload: true,
					spawn: true,
				}
			},
		},

		/*
		 =====================================================================================================================================
		 end of watch
		 =====================================================================================================================================
		 *
		 */

		concat: {
			dist: {
				src: ['css/homepage.css'],
				dest: 'dist/styles.css'
			}
		}, // concat

		uglify: {
			dist: {
				src: 'scripts.js',
				dest: 'dist/scripts.min.js'
			}
		}, // uglify

		eslint: {
			target: '*.js',
			options: {
				configFile: 'tests/conf/eslint.json',
				rulePaths: ['tests/conf/rules']
			}
		}, // linter for es6 and other

		htmlmin: {
			dist: {
				options: {
					removeComments: false,
					removeRedundantAttributes: false,
					useShortDoctype: true,
					collapseWhitespace: true
				},
				expand: true,
				cwd: 'dist/',
				src: ['**/*.html'],
				dest: 'dist/'
			}
		}, // htmlmin

		pug: {
			compile: {
				options: {
					pretty: true,
					data: {
						debug: true
					}
				},
				files: {
					// Change these out when creating new pages
					//
					// 'dist/landing/rolla.html': ['pug/landing/rolla.pug'],
					'dist/hp/070818.html': ['pug/hp/070818.pug']
				}
			}
		} //Pug

		// browserSync: {
		// 	dev: {
		// 		// bsFiles: {
		// 		//   src: ['dist/html/*.html']
		// 		// },
		// 		options: {
		// 			// port: "8888",
		// 			watchTask: true,
		// 			server: "dist/",
		// 			plugins: [{
		// 				module: "bs-html-injector",
		// 				options: {
		// 					files: ["dist/html/*.html", "dist/css/*.css", "dist/js/*.js"]
		// 				}
		// 			}]
		// 		}
		// 	}
		// } //browserSync

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-html');
	grunt.loadNpmTasks('grunt-contrib-pug');

	grunt.registerTask('default', ['watch', 'pug']);
	grunt.registerTask('nw', ['nightwatch']);
	grunt.registerTask('build', ['concat', 'uglify', 'pug', 'htmlmin']);
	grunt.registerTask('html', ['htmlmin', 'htmllint']);

};
