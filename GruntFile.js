module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: 'css'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['compass']
			}
		},
		concat: {
			  options: {
			    // define a string to put between each file in the concatenated output
			    separator: '\n\n'
			  },
			  dist: {
			    // the files to concatenate
			    src: ['js/bootstrap.js','js/effects.js'],
			    // the location of the resulting JS file
			    dest: 'bin/<%= pkg.name %>.js'
			  }

		},
		uglify:{
			options:{mangle:false},
			my_target:{
				files:{'bin/js/<%= pkg.name %>.min.js' : ['bin/<%= pkg.name %>.js']

				}
			}
		}		
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}