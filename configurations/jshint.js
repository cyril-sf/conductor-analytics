module.exports = {
  all: {
    src: [
      'lib/app/**/*.js',
      'lib/card.js',
      'test/tests/**/*.js'
    ],
    options: {
      jshintrc: '.jshintrc',
      force: true
    }
  }
};
