module.exports = {
  all: {
    files: [
      'configurations/**',
      'lib/**',
      'templates/**',
      'stylesheets/**',
      'test/**/*.js',
      'test/index.html',
      'vendor/*.js'
    ],
    tasks: ['build', 'symlink']
  }
};
