/*
 * @package navy-web
 */

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      default: {
        options: {
          includePaths: [
            'bower_components/bootstrap-sass-official/assets/stylesheets',
            'bower_components/fontawesome/scss'
          ],
          outputStyle: 'compressed'
        },
        files: {
          "css/crowi-web.min.css": "resources/css/crowi-web.scss"
        }
      }
    },
    watch: {
      css: {
        files: 'resources/css/*.scss',
        tasks: ['sass:default']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['sass']);
};
