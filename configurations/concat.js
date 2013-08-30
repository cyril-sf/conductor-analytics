module.exports = {
  main: {
    src: ['tmp/public/conductor-analytics/**/*.js', 'lib/card.js'],
    dest: 'dist/card.js'
  },

  tests: {
    src: ['tmp/public/test/**/*.js'],
    dest: 'tmp/public/test/card_test.js'
  }
};
