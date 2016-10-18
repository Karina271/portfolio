module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/style.css': 'css/style.scss'
                }
            }
        }, 
        watch: {
            scripts: {
                files: ['css/*.scss'], 
                tasks: ['sass'],
                //options: {
                    //spawn: false, 
                //},
            }, 
        },
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['sass']);
};