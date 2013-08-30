module.exports = {
  all: {
    files: [
      'configurations/**',
      'lib/**',
      'templates/**',
      'test/**/*.js',
      'test/index.html',
      'vendor/*.js'
    ],
    tasks: ['build', 'symlink']
  }
};
