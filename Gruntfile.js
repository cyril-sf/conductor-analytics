module.exports = function(grunt) {
  require('matchdep').
    filterDev('grunt-*').
    filter(function(name){ return name !== 'grunt-cli'; }).
      forEach(grunt.loadNpmTasks);

  function config(configFileName) {
    return require('./configurations/' + configFileName);
  }

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    env: process.env,

    clean: ["tmp", "dist/*"],
    emberTemplates: config('ember_templates'),
    transpile: config('transpile'),
    concat: config('concat'),
    jshint: config('jshint'),
    copy: config('copy'),

    symlink: config('symlink'),
    connect: config('connect'),
    watch: config('watch')
  });

  grunt.registerTask('build', [
                       'clean',
                       'emberTemplates',
                       'transpile',
                       'jshint',
                       'concat',
                       'copy'
  ]);

  grunt.registerTask('default', ['build']);
  grunt.registerTask('server', ['build', 'symlink', 'connect', 'watch']);
};
